/*
# Create contact_messages table for portfolio contact form

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, visitor's name)
  - `email` (text, visitor's email)
  - `subject` (text, message subject)
  - `message` (text, the message body)
  - `is_read` (boolean, default false - tracks if Shiwam has read the message)
  - `created_at` (timestamptz, default now)
2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated INSERT so visitors can submit the contact form without signing in.
- Allow authenticated SELECT/UPDATE/DELETE so Shiwam (admin) can read and manage messages after signing in.
- No anon SELECT - visitors should not be able to read other people's messages.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_messages" ON contact_messages;
CREATE POLICY "anon_insert_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_messages" ON contact_messages;
CREATE POLICY "auth_select_messages" ON contact_messages FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_messages" ON contact_messages;
CREATE POLICY "auth_update_messages" ON contact_messages FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_messages" ON contact_messages;
CREATE POLICY "auth_delete_messages" ON contact_messages FOR DELETE
  TO authenticated USING (true);
