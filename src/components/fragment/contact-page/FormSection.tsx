"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PrimaryButton } from "@/components/element/Button";

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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
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
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* Row 2: Subject */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Subject"
              {...register("subject")}
              className={`w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.email ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 3: Message */}
        <div className="flex flex-col gap-1">
          <textarea
            placeholder="Apa yang ingin Anda bicarakan?"
            rows={6}
            {...register("message")}
            className={`w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
              errors.message ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-end justify-center gap-2 mt-2">
          <PrimaryButton
            type="submit"
            disabled={status.type === "loading" || isSubmitting}
            // className="flex items-center gap-2 px-6 py-3 bg-primary font-medium rounded-md hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === "loading" || isSubmitting
              ? "MENGIRIM..."
              : "KIRIM PESAN"}
          </PrimaryButton>
          {status.type === "success" && (
            <span role="status" className="text-sm text-green-400">
              {status.msg}
            </span>
          )}
          {status.type === "error" && (
            <span role="alert" className="text-sm text-red-500">
              {status.msg}
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
