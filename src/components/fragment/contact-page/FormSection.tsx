"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiArrowUpRight } from "react-icons/fi";

// Schema validasi dengan Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Nama lengkap wajib diisi")
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
  message: z
    .string()
    .min(1, "Pesan wajib diisi")
    .min(10, "Pesan minimal 10 karakter"),
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

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Handle form submission di sini
      console.log("Form data:", data);

      // Contoh: kirim ke API
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      // });

      reset();
      alert("Pesan berhasil dikirim!");
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal mengirim pesan. Silakan coba lagi.");
    }
  };

  return (
    <section className="container-custom w-full max-w-[800]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Input */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Tulis nama lengkap di sini"
              {...register("name")}
              className={`w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-primary transition-all ${
                errors.name ? "ring-2 ring-red-500" : ""
              }`}
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
              placeholder="Tulis nomor handphone Anda"
              {...register("phone")}
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
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Tulis email Anda di sini"
            {...register("email")}
            className={`w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-primary transition-all ${
              errors.email ? "ring-2 ring-red-500" : ""
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
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
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "MENGIRIM..." : "KIRIM PESAN"}
            <FiArrowUpRight size={20} />
          </button>
        </div>
      </form>
    </section>
  );
}
