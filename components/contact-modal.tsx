"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const whatsappNumber = "+918384092211"; // Same number from order form
    const message = `Hi, I'm interested in your wedding planning services!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-border-enhanced bg-[#0f0f0f] text-white border-neutral-800 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-700 to-yellow-600 bg-clip-text text-transparent">
            Let's Plan Your Dream Wedding
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-neutral-200 flex items-center gap-2"
            >
              <User className="h-4 w-4 text-lime-300" />
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your name"
              className="glass-border bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-lime-300"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-neutral-200 flex items-center gap-2"
            >
              <Mail className="h-4 w-4 text-lime-300" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="your.email@example.com"
              className="glass-border bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-lime-300"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-neutral-200 flex items-center gap-2"
            >
              <Phone className="h-4 w-4 text-lime-300" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="+1 (555) 000-0000"
              className="glass-border bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-lime-300"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-neutral-200 flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4 text-lime-300" />
              Tell Us About Your Vision
            </Label>
            <Textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Share your wedding date, venue preferences, guest count, or any special requests..."
              className="glass-border bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-lime-300 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800 bg-transparent"
            >
              Cancel
            </Button>
            <Button type="submit" variant="uiverseGold" className="flex-1">
              <Send className="h-4 w-4 mr-2" />
              Send via WhatsApp
            </Button>
          </div>
        </form>

        <p className="text-xs text-neutral-500 text-center mt-4">
          We'll respond within 24 hours to discuss your special day
        </p>
      </DialogContent>
    </Dialog>
  );
}
