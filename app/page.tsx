'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('news');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      {/* Дээд хэсэг (Header) */}
      <header className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl">
            📢
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Ангийн Удирдлага</h1>
            <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span> Supabase холбогдсон
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition">
            🔒 Багшаас гарах
          </button>
        </div>
      </header>

      {/* Үндсэн контент хэсэг */}
      <main className="mx-auto max-w-5xl px-6 py-8">
        {/* Цэсүүд (Tabs) */}
        <div className="mb-6 flex gap-2 rounded-2xl bg-slate-200/70 p-1.5 w-fit">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              activeTab === 'news'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📢 Мэдээлэл
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              activeTab === 'tasks'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ☑️ Ажлууд
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              activeTab === 'feedback'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            💬 Саналууд
          </button>
          <button
            onClick={() => setActiveTab('duty')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              activeTab === 'duty'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📅 Жижүүр
          </button>
        </div>

        {/* Мэдээлэл нэмэх заавар болон форм */}
        {activeTab === 'news' && (
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
            <h2 className="mb-4 text-lg font-bold text-blue-600 flex items-center gap-2">
              <span>+</span> Шинэ мэдээлэл нэмэх
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Гарчиг"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Мэдээллийн дэлгэрэнгүй..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition"
              >
                🚀 Нийтлэх
              </button>
            </form>
          </div>
        )}

        {activeTab !== 'news' && (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm border border-slate-100">
            <p className="text-slate-500">Энэ хэсгийн контент одоогоор бэлтгэгдэж байна...</p>
          </div>
        )}
      </main>
    </div>
  );
}