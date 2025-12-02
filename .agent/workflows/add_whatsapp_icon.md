---
description: Add WhatsApp icon to AgentContact component using react-icons
---

1. Install the `react-icons` package.
   // turbo
   ```bash
   npm install react-icons --save
   ```
2. Open `src/components/AgentContact.tsx`.
3. Add an import for the WhatsApp icon from `react-icons/fa`:
   ```tsx
   import { FaWhatsapp } from "react-icons/fa";
   ```
4. Replace the `<Whatsapp ... />` JSX element with `<FaWhatsapp ... />`.
5. Save the file and run the development server to verify the icon displays correctly:
   ```bash
   npm run dev
   ```
6. Commit the changes.
   ```bash
   git add .
   git commit -m "Add WhatsApp icon using react-icons"
   ```
