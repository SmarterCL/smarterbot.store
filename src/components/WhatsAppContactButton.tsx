'use client';

import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';

export default function WhatsAppContactButton() {
  return (
    <Link
      href="/connect"
      className="whatsapp-float-btn"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <MessageCircleMore size={22} />
      <span>WhatsApp</span>
    </Link>
  );
}
