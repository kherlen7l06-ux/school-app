-- 1. Мэдээллийн хүснэгт
create table if not exists news (
  id text primary key,
  title text not null,
  content text,
  category text,
  date text,
  important boolean default false,
  likes integer default 0
);

-- 2. Цахим хичээлийн хүснэгт
create table if not exists lessons (
  id text primary key,
  subject text,
  title text not null,
  description text,
  duration text,
  completed boolean default false
);

-- 3. Хичээлийн хуваарийн хүснэгт
create table if not exists timetable (
  id text primary key,
  day text not null,
  time text,
  subject text,
  room text,
  teacher text
);

-- 4. Санал хүсэлтийн хүснэгт
create table if not exists feedbacks (
  id text primary key,
  author text,
  category text,
  message text,
  date text,
  status text default 'Шинэ',
  reply text default ''
);

-- Эрхийн тохиргоо (RLS)
alter table news enable row level security;
alter table lessons enable row level security;
alter table timetable enable row level security;
alter table feedbacks enable row level security;

create policy "Public News" on news for all using (true) with check (true);
create policy "Public Lessons" on lessons for all using (true) with check (true);
create policy "Public Timetable" on timetable for all using (true) with check (true);
create policy "Public Feedbacks" on feedbacks for all using (true) with check (true);