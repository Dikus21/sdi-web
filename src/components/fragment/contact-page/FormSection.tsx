"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/element/Button";
import {
  fadeInUp,
  staggerFast,
  inputReveal,
  defaultTransition,
} from "@/lib/motion";

// Schema validasi dengan Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Nama wajib diisi")
    .regex(/^[a-zA-Z\s]+$/, "Hanya huruf yang diperbolehkan")
    .min(3, "Nama minimal 3 karakter"),
  phone: z
    .string()
    .min(1, "Nomor handphone wajib diisi")
    .regex(/^[0-9+\-\s]+$/, "Format nomor tidak valid")
    .min(10, "Nomor minimal 10 digit"),
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  subject: z.string().min(3, "Subject wajib diisi"),
  message: z
    .string()
    .min(1, "Pesan wajib diisi")
    .min(10, "Pesan minimal 10 karakter"),
  website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = React.useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; msg: string }
    | { type: "error"; msg: string }
  >({ type: "idle" });

  const onSubmit = async (values: ContactFormData) => {
    if (status.type === "loading") return;
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Gagal mengirim. Coba lagi.");
      }

      setStatus({
        type: "success",
        msg: "Terkirim! Kami akan menghubungi Anda sesegera mungkin.",
      });
      reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Gagal mengirim. Coba lagi.";
      setStatus({
        type: "error",
        msg: message || "Gagal mengirim. Coba lagi.",
      });
    }
  };

  return (
    <section className="container-custom w-full max-w-[800] z-10 pb-10">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 id="contact-form-title" className="sr-only">
          Contact form
        </h2>

        {/* Honeypot field */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px" }}
          {...register("website")}
        />

        {/* Row 1: Name & Phone */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={inputReveal}
          transition={defaultTransition}
        >
          {/* Name Input */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className={`w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.name ? "ring-2 ring-red-500" : ""
              }`}
              {...register("name", {
                required: "Name is required",
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                },
              })}
            />
            {errors.name && (
              <motion.span
                className="text-red-500 text-sm"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.name.message}
              </motion.span>
            )}
          </div>

          {/* Phone Input */}
          <div className="flex flex-col gap-1">
            <input
              type="tel"
              placeholder="Nomor Telephone"
              {...register("phone")}
              onKeyDown={(e) => {
                if (
                  !/[0-9]/.test(e.key) &&
                  e.key !== "Backspace" &&
                  e.key !== "Tab"
                ) {
                  e.preventDefault();
                }
              }}
              className={`w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.phone ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.phone && (
              <motion.span
                className="text-red-500 text-sm"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.phone.message}
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Row 2: Email & Subject */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={inputReveal}
          transition={defaultTransition}
        >
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={`w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.email ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <motion.span
                className="text-red-500 text-sm"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.email.message}
              </motion.span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Subject"
              {...register("subject")}
              className={`w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.subject ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.subject && (
              <motion.span
                className="text-red-500 text-sm"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.subject.message}
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Row 3: Message */}
        <motion.div
          className="flex flex-col gap-1"
          variants={inputReveal}
          transition={defaultTransition}
        >
          <textarea
            placeholder="Apa yang ingin Anda bicarakan?"
            rows={6}
            {...register("message")}
            className={`w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
              errors.message ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.message && (
            <motion.span
              className="text-red-500 text-sm"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {errors.message.message}
            </motion.span>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          className="flex flex-col items-end justify-center gap-2 mt-2"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <PrimaryButton
            type="submit"
            disabled={status.type === "loading" || isSubmitting}
          >
            {status.type === "loading" || isSubmitting
              ? "MENGIRIM..."
              : "KIRIM PESAN"}
          </PrimaryButton>

          {status.type === "success" && (
            <motion.span
              role="status"
              className="text-sm text-primary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {status.msg}
            </motion.span>
          )}

          {status.type === "error" && (
            <motion.span
              role="alert"
              className="text-sm text-red-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {status.msg}
            </motion.span>
          )}
        </motion.div>
      </motion.form>
    </section>
  );
}
