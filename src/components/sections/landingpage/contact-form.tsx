"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Tab, { TabItem } from "@/components/ui/tab";
import TextArea from "@/components/ui/textarea";
import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

interface IFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  category: string | null;
  emotion: string | null;
}

const categories: TabItem[] = [
  { value: "Project" },
  { value: "Enquiry" },
  { value: "Help" },
];

const emojis: TabItem[] = [{ value: "👋" }, { value: "😍" }, { value: "🎁" }];

const ContactForm = () => {
  const date = useMemo(() => new Date(), []);

  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    category: null,
    emotion: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!, // 👉 replace with EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!, // 👉 replace with EmailJS Template ID
        {
          fullName: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          category: formData.category,
          emotion: formData.emotion,
        },
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY! // 👉 replace with EmailJS Public Key
      );

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
        category: null,
        emotion: null,
      });
    } catch (err) {
      console.error("Failed to send message: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-start justify-between gap-5 mt-[80px]">
      <div className="flex-1 flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <h3 className="text-indigo-300 text-xl">category</h3>
          <Tab
            items={categories}
            onChange={(value) => setFormData({ ...formData, category: value })}
          />
        </div>
        <div className="flex flex-col gap-3 text-xl">
          <h3 className="text-indigo-300">Emotion</h3>
          <Tab
            items={emojis}
            onChange={(value) => setFormData({ ...formData, emotion: value })}
          />
        </div>
        <p>
          It&apos;s currently 
          {date.getHours() % 12 < 10
            ? `0${date.getHours() % 12}`
            : date.getHours() % 12}
          :
          {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}{" "}
          {date.getHours() > 12 ? "PM" : "AM"}
           in India 🇮🇳. Feel free to send Us a message, We will get back to you
          as soon as possible.
        </p>
        <p>
          You can also contact us at <br />
          <a
            href="mailTo:info.picominds@gmail.com"
            className="font-semibold underline cursor-pointer"
          >
            info.picominds@gmail.com
          </a>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-black/10 rounded-4xl p-10 flex flex-col gap-3"
      >
        <Input
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        )}

        <Input
          placeholder="email@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <Input
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject}</p>
        )}

        <TextArea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}

        <Button type="submit" className="text-2xl" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </main>
  );
};

export default ContactForm;
