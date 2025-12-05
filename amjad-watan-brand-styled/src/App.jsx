
import React, { useState } from "react";
import logo from "./logo.png";

export default function App() {

  const [form,setForm]=useState({name:"",phone:"",game:""});
  const [submitted,setSubmitted]=useState(null);

  const submit=e=>{
    e.preventDefault();
    setSubmitted(form);
    setForm({name:"",phone:"",game:""});
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center p-6 bg-[#E8E9EA]">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

        <div className="flex justify-center mb-6">
          <img src={logo} alt="Amjad Watan" className="w-48" />
        </div>

        <h1 className="text-3xl font-bold text-primary mb-4 text-center">
          تسجيل بطولة أمجاد وطن
        </h1>

        <form onSubmit={submit} className="space-y-4">

          <input className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blueLight"
            placeholder="الاسم الكامل"
            value={form.name}
            onChange={e=>setForm({...form,name:e.target.value})} />

          <input className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blueLight"
            placeholder="رقم الجوال"
            value={form.phone}
            onChange={e=>setForm({...form,phone:e.target.value})} />

          <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blueLight"
            value={form.game}
            onChange={e=>setForm({...form,game:e.target.value})}>

            <option value="">اختر اللعبة</option>
            <option value="fifa">FIFA</option>
            <option value="jakaro">جاكارو</option>
            <option value="baloot">بلوت</option>
          </select>

          <button className="w-full bg-primary text-white py-3 rounded-xl hover:bg-blueLight transition">
            تسجيل
          </button>

        </form>

        {submitted && (
          <div className="mt-4 p-4 bg-accent/20 rounded-lg text-sm text-primary">
            <p>تم التسجيل بنجاح!</p>
            <p>الاسم: {submitted.name}</p>
            <p>الجوال: {submitted.phone}</p>
            <p>اللعبة: {submitted.game}</p>
          </div>
        )}
      </div>
    </div>
  );
}
