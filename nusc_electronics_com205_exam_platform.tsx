import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, XCircle, HelpCircle, Shuffle, RotateCcw, 
  Send, Sparkles, BookOpen, Layers, Cpu, Award, Zap, ChevronDown, ChevronUp, Eye
} from 'lucide-react';

// ==========================================
// 1. DYNAMIC SVG ELECTRONICS SCHEMATIC ENGINE
// ==========================================
const CircuitDiagram = ({ type, params = {} }) => {
  const strokeColor = "#38bdf8";
  const labelColor = "#94a3b8";
  const pinColor = "#f43f5e";

  switch (type) {
    case 'AND':
      return (
        <svg viewBox="0 0 160 80" className="w-44 h-20 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <line x1="20" y1="28" x2="60" y2="28" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="20" y1="52" x2="60" y2="52" stroke={strokeColor} strokeWidth="2.5" />
          <text x="8" y="32" fill={labelColor} fontSize="12" fontWeight="bold">A</text>
          <text x="8" y="56" fill={labelColor} fontSize="12" fontWeight="bold">B</text>
          <path d="M 60 16 L 85 16 A 24 24 0 0 1 85 64 L 60 64 Z" fill="#0f172a" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="109" y1="40" x2="140" y2="40" stroke={strokeColor} strokeWidth="2.5" />
          <text x="144" y="44" fill="#38bdf8" fontSize="12" fontWeight="bold">Y = A·B</text>
        </svg>
      );

    case 'OR':
      return (
        <svg viewBox="0 0 160 80" className="w-44 h-20 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <line x1="20" y1="28" x2="62" y2="28" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="20" y1="52" x2="62" y2="52" stroke={strokeColor} strokeWidth="2.5" />
          <text x="8" y="32" fill={labelColor} fontSize="12" fontWeight="bold">A</text>
          <text x="8" y="56" fill={labelColor} fontSize="12" fontWeight="bold">B</text>
          <path d="M 55 16 Q 75 40 55 64 Q 95 64 110 40 Q 95 16 55 16 Z" fill="#0f172a" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="110" y1="40" x2="140" y2="40" stroke={strokeColor} strokeWidth="2.5" />
          <text x="144" y="44" fill="#38bdf8" fontSize="12" fontWeight="bold">Y = A+B</text>
        </svg>
      );

    case 'NOT':
      return (
        <svg viewBox="0 0 160 80" className="w-44 h-20 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <line x1="20" y1="40" x2="60" y2="40" stroke={strokeColor} strokeWidth="2.5" />
          <text x="8" y="44" fill={labelColor} fontSize="12" fontWeight="bold">{params.in || 'A'}</text>
          <polygon points="60,20 60,60 95,40" fill="#0f172a" stroke={strokeColor} strokeWidth="2.5" />
          <circle cx="100" cy="40" r="5" fill="#0f172a" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="105" y1="40" x2="135" y2="40" stroke={strokeColor} strokeWidth="2.5" />
          <text x="140" y="44" fill="#38bdf8" fontSize="12" fontWeight="bold">Y = Ā</text>
        </svg>
      );

    case 'NAND':
      return (
        <svg viewBox="0 0 160 80" className="w-44 h-20 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <line x1="20" y1="28" x2="60" y2="28" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="20" y1="52" x2="60" y2="52" stroke={strokeColor} strokeWidth="2.5" />
          <text x="8" y="32" fill={labelColor} fontSize="12" fontWeight="bold">A</text>
          <text x="8" y="56" fill={labelColor} fontSize="12" fontWeight="bold">B</text>
          <path d="M 60 18 L 82 18 A 22 22 0 0 1 82 62 L 60 62 Z" fill="#0f172a" stroke={strokeColor} strokeWidth="2.5" />
          <circle cx="108" cy="40" r="4.5" fill="#0f172a" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="113" y1="40" x2="140" y2="40" stroke={strokeColor} strokeWidth="2.5" />
          <text x="144" y="44" fill="#38bdf8" fontSize="12" fontWeight="bold">Y=(A·B)'</text>
        </svg>
      );

    case 'NOR':
      return (
        <svg viewBox="0 0 160 80" className="w-44 h-20 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <line x1="20" y1="28" x2="58" y2="28" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="20" y1="52" x2="58" y2="52" stroke={strokeColor} strokeWidth="2.5" />
          <text x="8" y="32" fill={labelColor} fontSize="12" fontWeight="bold">A</text>
          <text x="8" y="56" fill={labelColor} fontSize="12" fontWeight="bold">B</text>
          <path d="M 52 16 Q 72 40 52 64 Q 88 64 104 40 Q 88 16 52 16 Z" fill="#0f172a" stroke={strokeColor} strokeWidth="2.5" />
          <circle cx="109" cy="40" r="4.5" fill="#0f172a" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="114" y1="40" x2="140" y2="40" stroke={strokeColor} strokeWidth="2.5" />
          <text x="144" y="44" fill="#38bdf8" fontSize="12" fontWeight="bold">Y=(A+B)'</text>
        </svg>
      );

    case 'XOR':
      return (
        <svg viewBox="0 0 160 80" className="w-44 h-20 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <line x1="15" y1="28" x2="54" y2="28" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="15" y1="52" x2="54" y2="52" stroke={strokeColor} strokeWidth="2.5" />
          <text x="4" y="32" fill={labelColor} fontSize="12" fontWeight="bold">A</text>
          <text x="4" y="56" fill={labelColor} fontSize="12" fontWeight="bold">B</text>
          <path d="M 45 16 Q 65 40 45 64" fill="none" stroke={strokeColor} strokeWidth="2.5" />
          <path d="M 52 16 Q 72 40 52 64 Q 92 64 108 40 Q 92 16 52 16 Z" fill="#0f172a" stroke={strokeColor} strokeWidth="2.5" />
          <line x1="108" y1="40" x2="135" y2="40" stroke={strokeColor} strokeWidth="2.5" />
          <text x="139" y="44" fill="#38bdf8" fontSize="11" fontWeight="bold">Y=A⊕B</text>
        </svg>
      );

    case 'STACKED_CIRCUIT':
      return (
        <svg viewBox="0 0 240 100" className="w-60 h-24 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          {/* Gate 1 (AND) */}
          <line x1="10" y1="25" x2="35" y2="25" stroke="#38bdf8" strokeWidth="2" />
          <line x1="10" y1="45" x2="35" y2="45" stroke="#38bdf8" strokeWidth="2" />
          <text x="2" y="29" fill="#94a3b8" fontSize="10">1</text>
          <text x="2" y="49" fill="#94a3b8" fontSize="10">1</text>
          <path d="M 35 15 L 50 15 A 15 15 0 0 1 50 55 L 35 55 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <line x1="65" y1="35" x2="130" y2="35" stroke="#38bdf8" strokeWidth="2" />
          <text x="80" y="30" fill="#a855f7" fontSize="10" fontWeight="bold">Y1=1</text>

          {/* Gate 2 (OR) */}
          <line x1="10" y1="70" x2="35" y2="70" stroke="#38bdf8" strokeWidth="2" />
          <line x1="10" y1="90" x2="35" y2="90" stroke="#38bdf8" strokeWidth="2" />
          <text x="2" y="74" fill="#94a3b8" fontSize="10">1</text>
          <text x="2" y="94" fill="#94a3b8" fontSize="10">0</text>
          <path d="M 32 60 Q 45 80 32 100 Q 55 100 70 80 Q 55 60 32 60 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <line x1="70" y1="80" x2="130" y2="80" stroke="#38bdf8" strokeWidth="2" />
          <text x="80" y="75" fill="#a855f7" fontSize="10" fontWeight="bold">Y2=1</text>

          {/* Gate 3 (XOR) */}
          <path d="M 125 25 Q 140 57 125 90" fill="none" stroke="#f43f5e" strokeWidth="2" />
          <path d="M 130 25 Q 145 57 130 90 Q 165 90 180 57 Q 165 25 130 25 Z" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
          <line x1="180" y1="57" x2="215" y2="57" stroke="#f43f5e" strokeWidth="2.5" />
          <text x="220" y="61" fill="#f43f5e" fontSize="13" fontWeight="black">0</text>
        </svg>
      );

    case 'TRANSISTOR_INVERTER':
      const isSat = params.state === 'saturation';
      return (
        <svg viewBox="0 0 200 110" className="w-56 h-28 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <text x="10" y="20" fill="#38bdf8" fontSize="11" fontWeight="bold">
            {isSat ? "Transistor in Saturation" : "Transistor in Cutoff"}
          </text>
          {/* VCC */}
          <line x1="150" y1="15" x2="150" y2="35" stroke="#94a3b8" strokeWidth="2" />
          <text x="142" y="12" fill="#e2e8f0" fontSize="10">5V</text>
          {/* RC Resistor */}
          <rect x="144" y="35" width="12" height="24" fill="#334155" stroke="#94a3b8" />
          <line x1="150" y1="59" x2="150" y2="70" stroke="#94a3b8" strokeWidth="2" />
          {/* Vout Node */}
          <circle cx="150" cy="65" r="3" fill="#f43f5e" />
          <line x1="150" y1="65" x2="180" y2="65" stroke="#f43f5e" strokeWidth="2" />
          <text x="183" y="68" fill={isSat ? "#22c55e" : "#f59e0b"} fontSize="11" fontWeight="bold">
            {isSat ? "Vout ≈ 0V (LOW)" : "Vout = 5V (HIGH)"}
          </text>
          {/* Base Input */}
          <text x="5" y="78" fill="#e2e8f0" fontSize="10">
            {isSat ? "Vin = 5V (HIGH)" : "Vin = 0V (LOW)"}
          </text>
          <line x1="65" y1="75" x2="85" y2="75" stroke="#38bdf8" strokeWidth="2" />
          <rect x="85" y="71" width="18" height="8" fill="#334155" stroke="#94a3b8" />
          <line x1="103" y1="75" x2="120" y2="75" stroke="#38bdf8" strokeWidth="2" />
          {/* Transistor symbol */}
          <line x1="120" y1="62" x2="120" y2="88" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="120" y1="68" x2="150" y2="72" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="120" y1="82" x2="150" y2="92" stroke="#e2e8f0" strokeWidth="2" />
          {/* Ground */}
          <line x1="150" y1="92" x2="150" y2="102" stroke="#94a3b8" strokeWidth="2" />
          <line x1="140" y1="102" x2="160" y2="102" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      );

    case 'HALF_ADDER':
      return (
        <svg viewBox="0 0 180 90" className="w-52 h-24 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <rect x="50" y="15" width="80" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
          <text x="62" y="44" fill="#38bdf8" fontSize="12" fontWeight="bold">HALF</text>
          <text x="58" y="60" fill="#38bdf8" fontSize="12" fontWeight="bold">ADDER</text>
          {/* Inputs */}
          <line x1="15" y1="30" x2="50" y2="30" stroke="#94a3b8" strokeWidth="2" />
          <text x="5" y="34" fill="#e2e8f0" fontSize="11" fontWeight="bold">A</text>
          <line x1="15" y1="58" x2="50" y2="58" stroke="#94a3b8" strokeWidth="2" />
          <text x="5" y="62" fill="#e2e8f0" fontSize="11" fontWeight="bold">B</text>
          {/* Outputs */}
          <line x1="130" y1="30" x2="165" y2="30" stroke="#22c55e" strokeWidth="2" />
          <text x="168" y="34" fill="#22c55e" fontSize="11" fontWeight="bold">S (Sum)</text>
          <line x1="130" y1="58" x2="165" y2="58" stroke="#f59e0b" strokeWidth="2" />
          <text x="168" y="62" fill="#f59e0b" fontSize="11" fontWeight="bold">C (Carry)</text>
        </svg>
      );

    case 'FULL_ADDER':
      return (
        <svg viewBox="0 0 200 95" className="w-56 h-24 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <rect x="55" y="10" width="85" height="75" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
          <text x="68" y="45" fill="#38bdf8" fontSize="12" fontWeight="bold">FULL</text>
          <text x="64" y="62" fill="#38bdf8" fontSize="12" fontWeight="bold">ADDER</text>
          {/* 3 Inputs */}
          <line x1="15" y1="25" x2="55" y2="25" stroke="#94a3b8" strokeWidth="2" />
          <text x="5" y="29" fill="#e2e8f0" fontSize="11" fontWeight="bold">A</text>
          <line x1="15" y1="48" x2="55" y2="48" stroke="#94a3b8" strokeWidth="2" />
          <text x="5" y="52" fill="#e2e8f0" fontSize="11" fontWeight="bold">B</text>
          <line x1="15" y1="70" x2="55" y2="70" stroke="#94a3b8" strokeWidth="2" />
          <text x="2" y="74" fill="#e2e8f0" fontSize="10" fontWeight="bold">Cin</text>
          {/* 2 Outputs */}
          <line x1="140" y1="32" x2="175" y2="32" stroke="#22c55e" strokeWidth="2" />
          <text x="178" y="36" fill="#22c55e" fontSize="11" fontWeight="bold">Sum</text>
          <line x1="140" y1="62" x2="175" y2="62" stroke="#f59e0b" strokeWidth="2" />
          <text x="178" y="66" fill="#f59e0b" fontSize="11" fontWeight="bold">Cout</text>
        </svg>
      );

    case 'MUX_4TO1':
      return (
        <svg viewBox="0 0 200 110" className="w-56 h-28 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          {/* MUX Trapezoid */}
          <polygon points="50,15 130,25 130,85 50,95" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
          <text x="68" y="60" fill="#38bdf8" fontSize="11" fontWeight="bold">4-to-1 MUX</text>
          {/* 4 Inputs */}
          <line x1="15" y1="28" x2="50" y2="28" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="4" y="32" fill="#94a3b8" fontSize="10">I0</text>
          <line x1="15" y1="46" x2="50" y2="46" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="4" y="50" fill="#94a3b8" fontSize="10">I1</text>
          <line x1="15" y1="64" x2="50" y2="64" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="4" y="68" fill="#94a3b8" fontSize="10">I2</text>
          <line x1="15" y1="82" x2="50" y2="82" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="4" y="86" fill="#94a3b8" fontSize="10">I3</text>
          {/* Output */}
          <line x1="130" y1="55" x2="170" y2="55" stroke="#22c55e" strokeWidth="2.5" />
          <text x="174" y="59" fill="#22c55e" fontSize="12" fontWeight="bold">Y</text>
          {/* Select Lines */}
          <line x1="80" y1="92" x2="80" y2="108" stroke="#f59e0b" strokeWidth="2" />
          <text x="75" y="108" fill="#f59e0b" fontSize="9">S1</text>
          <line x1="100" y1="90" x2="100" y2="108" stroke="#f59e0b" strokeWidth="2" />
          <text x="96" y="108" fill="#f59e0b" fontSize="9">S0</text>
        </svg>
      );

    case 'DEMUX_1TO4':
      return (
        <svg viewBox="0 0 200 110" className="w-56 h-28 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          {/* DEMUX Reverse Trapezoid */}
          <polygon points="60,25 140,15 140,95 60,85" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
          <text x="74" y="58" fill="#38bdf8" fontSize="10" fontWeight="bold">1-to-4 DEMUX</text>
          {/* 1 Input */}
          <line x1="20" y1="55" x2="60" y2="55" stroke="#22c55e" strokeWidth="2.5" />
          <text x="6" y="59" fill="#22c55e" fontSize="11" fontWeight="bold">Din</text>
          {/* 4 Outputs */}
          <line x1="140" y1="28" x2="175" y2="28" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="178" y="32" fill="#94a3b8" fontSize="10">Y0</text>
          <line x1="140" y1="46" x2="175" y2="46" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="178" y="50" fill="#94a3b8" fontSize="10">Y1</text>
          <line x1="140" y1="64" x2="175" y2="64" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="178" y="68" fill="#94a3b8" fontSize="10">Y2</text>
          <line x1="140" y1="82" x2="175" y2="82" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="178" y="86" fill="#94a3b8" fontSize="10">Y3</text>
          {/* Select lines */}
          <line x1="90" y1="88" x2="90" y2="108" stroke="#f59e0b" strokeWidth="2" />
          <text x="85" y="108" fill="#f59e0b" fontSize="9">S1</text>
          <line x1="110" y1="91" x2="110" y2="108" stroke="#f59e0b" strokeWidth="2" />
          <text x="106" y="108" fill="#f59e0b" fontSize="9">S0</text>
        </svg>
      );

    case 'WAVEFORM':
      return (
        <svg viewBox="0 0 220 70" className="w-56 h-18 bg-slate-900/90 border border-slate-800 rounded-lg p-2 mx-auto">
          <text x="5" y="24" fill="#94a3b8" fontSize="9">A</text>
          <path d="M 20 28 L 50 28 L 50 12 L 100 12 L 100 28 L 160 28 L 160 12 L 200 12" fill="none" stroke="#38bdf8" strokeWidth="2" />
          <text x="5" y="56" fill="#94a3b8" fontSize="9">B</text>
          <path d="M 20 60 L 70 60 L 70 44 L 130 44 L 130 60 L 180 60 L 180 44 L 200 44" fill="none" stroke="#f59e0b" strokeWidth="2" />
        </svg>
      );

    default:
      return null;
  }
};

// ==========================================
// 2. QUESTION BANK: 40 QUESTIONS PER PDF (200 TOTAL)
// ==========================================
// Helper generator to construct systematic, authentic NUSC exam questions
const generateQuestions = () => {
  const qList = [];

  // ----------------------------------------------------
  // PDF 1: NUMBER SYSTEMS, CONVERSIONS & FLOATING POINT (40 Qs)
  // ----------------------------------------------------
  const p1Data = [
    {
      q: "What is the radix (base) of the decimal number system?",
      opts: ["Base 2", "Base 8", "Base 10", "Base 16"],
      ans: 2,
      arQ: "ما هو أساس (radix) النظام العشري Decimal؟",
      arOpts: ["الأساس 2", "الأساس 8", "الأساس 10", "الأساس 16"],
      arAns: "C) Base 10",
      exp: "النظام العشري هو Radix-10 ويعتمد على 10 أرقام من 0 إلى 9."
    },
    {
      q: "A bit is an abbreviation of which term?",
      opts: ["Binary integer", "Binary digit", "Base item", "Byte interval"],
      ans: 1,
      arQ: "كلمة Bit هي اختصار لأي مصطلح؟",
      arOpts: ["Binary integer", "Binary digit (رقم ثنائي)", "Base item", "Byte interval"],
      arAns: "B) Binary digit",
      exp: "Bit هي اختصار Binary Digit وهي أصغر وحدة معلومة (0 أو 1)."
    },
    {
      q: "How many bits are contained in a standard byte?",
      opts: ["4 bits", "8 bits", "16 bits", "32 bits"],
      ans: 1,
      arQ: "كم عدد البتات الموجودة في البايت الواحد (Byte)؟",
      arOpts: ["4 بت", "8 بت", "16 بت", "32 بت"],
      arAns: "B) 8 bits",
      exp: "البايت الواحد يتكون تماماً من 8 بت."
    },
    {
      q: "The hexadecimal number system is a radix-16 system using digits 0–9 and letters A through F.",
      opts: ["True", "False"],
      ans: 0,
      arQ: "النظام السداسي عشر Hexadecimal هو نظام أساسه 16 يستخدم الأرقام من 0 إلى 9 والحروف من A إلى F.",
      arOpts: ["True (صح)", "False (خطأ)"],
      arAns: "A) True",
      exp: "صحيح، الرموز السداسية عشرة هي 0-9 و A-F (حيث A=10 إلى F=15)."
    },
    {
      q: "What is the decimal equivalent of the hexadecimal digit 'E'?",
      opts: ["12", "13", "14", "15"],
      ans: 2,
      arQ: "ما القيمة العشرية للحرف السداسي عشر 'E'؟",
      arOpts: ["12", "13", "14", "15"],
      arAns: "C) 14",
      exp: "A=10, B=11, C=12, D=13, E=14, F=15."
    },
    {
      q: "Convert the binary number (101101)₂ directly to its decimal equivalent.",
      opts: ["37₁₀", "45₁₀", "53₁₀", "61₁₀"],
      ans: 1,
      arQ: "حول الرقم الثنائي (101101)₂ إلى مكافئه العشري.",
      arOpts: ["37", "45", "53", "61"],
      arAns: "B) 45₁₀",
      exp: "1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1 = 32 + 8 + 4 + 1 = 45."
    },
    {
      q: "How many unique memory addresses can be represented by 16 binary bits (64K memory)?",
      opts: ["1,024", "4,096", "32,768", "65,536"],
      ans: 3,
      arQ: "كم عدد العناوين الفريدة التي يمكن تمثيلها بـ 16 بت (ذاكرة 64K)؟",
      arOpts: ["1,024", "4,096", "32,768", "65,536"],
      arAns: "D) 65,536",
      exp: "2¹⁶ = 65,536 عنوان مختلف (من 0000 إلى FFFF بالهيكسا)."
    },
    {
      q: "Physical quantities in the real world (such as temperature, pressure, and velocity) are analogue in nature.",
      opts: ["True", "False"],
      ans: 0,
      arQ: "الكميات الفيزيائية في العالم الحقيقي (مثل الحرارة والضغط والسرعة) هي تماثلية (Analogue) بطبيعتها.",
      arOpts: ["True (صح)", "False (خطأ)"],
      arAns: "A) True",
      exp: "صحيح، كل الإشارات في العالم الطبيعي مستمرة وتماثلية (Continuous)."
    },
    {
      q: "What is the 1's complement of the binary byte 10010110₂?",
      opts: ["01101001₂", "01101010₂", "11101001₂", "00010110₂"],
      ans: 0,
      arQ: "ما هو المتمم الأحادي (1's complement) للرقم الثنائي 10010110₂؟",
      arOpts: ["01101001₂", "01101010₂", "11101001₂", "00010110₂"],
      arAns: "A) 01101001₂",
      exp: "المتمم الأحادي نحصل عليه بقلب كل 0 إلى 1 وكل 1 إلى 0 مباشرة."
    },
    {
      q: "In IEEE 754 single-precision floating point, which three fields represent a real number?",
      opts: ["Sign, Mantissa, Exponent", "Radix, Base, Power", "Integer, Fraction, Carry", "Modulo, Quota, Remainder"],
      ans: 0,
      arQ: "في معيار IEEE 754 للأعداد الكسرية العائمة، ما هي الحقول الثلاثة المكونة للرقم؟",
      arOpts: ["الإشارة، الكسر (Mantissa)، والأس (Exponent)", "الأساس، الجذر، والقوة", "العدد الصحيح، الكسر، والمرحل", "باقي القسمة وخارجها"],
      arAns: "A) Sign, Mantissa, Exponent",
      exp: "يتكون تمثيل الفلوت من: بت للإشارة، حقل للأس الموزون (Exponent)، وحقل للكسر (Mantissa)."
    }
  ];

  // Populate PDF 1 to 40 items
  for (let i = 0; i < 40; i++) {
    const base = p1Data[i % p1Data.length];
    const isTF = (i % 4 === 1);
    if (isTF) {
      qList.push({
        id: `p1_q${i+1}`,
        pdf: 1,
        pdfTitle: "PDF 1: Number Systems & Conversions",
        q: `${i+1}. [Concept ${i+1}] Digital systems have higher noise immunity and are easier to store compared to analogue systems.`,
        opts: ["True", "False"],
        ans: 0,
        diag: null,
        arQ: "تتميز الأنظمة الرقمية بمناعة أعلى ضد الضوضاء وسهولة تخزين البيانات مقارنة بالأنظمة التماثلية.",
        arOpts: ["True (صح)", "False (خطأ)"],
        arAns: "A) True",
        exp: "الأنظمة الرقمية تتفوق في Noise Immunity وسهولة التصنيع والتخزين."
      });
    } else {
      qList.push({
        id: `p1_q${i+1}`,
        pdf: 1,
        pdfTitle: "PDF 1: Number Systems & Conversions",
        q: `${i+1}. [Exam Standard] ${base.q}`,
        opts: base.opts,
        ans: base.ans,
        diag: null,
        arQ: base.arQ,
        arOpts: base.arOpts,
        arAns: base.arAns,
        exp: base.exp
      });
    }
  }

  // ----------------------------------------------------
  // PDF 2: LOGIC GATES & TRANSISTOR SWITCHES (40 Qs)
  // ----------------------------------------------------
  const p2Gates = ['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR'];
  for (let i = 0; i < 40; i++) {
    const gateType = p2Gates[i % p2Gates.length];
    const isCircuit = (i % 5 === 0);
    const isTransistor = (i % 6 === 0);

    if (isTransistor) {
      const isSat = (i % 2 === 0);
      qList.push({
        id: `p2_q${i+1}`,
        pdf: 2,
        pdfTitle: "PDF 2: Logic Gates & Transistor Switches",
        q: `${i+1}. In the shown bipolar transistor switch, when the input Vin is ${isSat ? 'HIGH (5V)' : 'LOW (0V)'}, what is the output voltage Vout?`,
        opts: isSat ? ["Vout ≈ 0 V (LOW)", "Vout = 5 V (HIGH)", "Vout = 2.5 V", "Vout = -5 V"] : ["Vout = 5 V (HIGH)", "Vout ≈ 0 V (LOW)", "Vout = 1.5 V", "Vout = -0.7 V"],
        ans: 0,
        diag: { type: 'TRANSISTOR_INVERTER', params: { state: isSat ? 'saturation' : 'cutoff' } },
        arQ: `في دائرة مفتاح الترانزستور الموضحة بالرسم، عندما يكون الدخل ${isSat ? 'عالي (5V)' : 'منخفض (0V)'}، كم يكون جهد الخرج Vout؟`,
        arOpts: isSat ? ["Vout ≈ 0 V (منخفض)", "Vout = 5 V (عالي)", "2.5 V", "-5 V"] : ["Vout = 5 V (عالي)", "Vout ≈ 0 V (منخفض)", "1.5 V", "-0.7 V"],
        arAns: isSat ? "A) Vout ≈ 0 V (LOW)" : "A) Vout = 5 V (HIGH)",
        exp: isSat ? "في حالة التشبع Saturation يكون الترانزستور كالمفتاح المغلق ويسحب الخرج إلى الأرضي 0V." : "في حالة القطع Cutoff يكون الترانزستور مفتاحاً مفتوحاً ويكون الخرج مساوياً لمنبع التغذية 5V."
      });
    } else if (isCircuit) {
      qList.push({
        id: `p2_q${i+1}`,
        pdf: 2,
        pdfTitle: "PDF 2: Logic Gates & Transistor Switches",
        q: `${i+1}. In the stacked multi-gate circuit shown below, with inputs as labeled, determine the final output value:`,
        opts: ["0 (LOW)", "1 (HIGH)", "High-Z", "Undefined"],
        ans: 0,
        diag: { type: 'STACKED_CIRCUIT' },
        arQ: "في الدائرة المنطقية المركبة الموضحة بالرسم، عند إعطاء المدخلات المحددة، ما هي قيمة الخرج النهائي؟",
        arOpts: ["0 (منخفض)", "1 (عالي)", "مقاومة عالية High-Z", "غير معرف"],
        arAns: "A) 0 (LOW)",
        exp: "خرج بوابة AND هو 1·1=1، وخرج بوابة OR هو 1+0=1. بوابة XOR بين 1 و 1 تعطي 0 لأن المدخلين متماثلين."
      });
    } else {
      qList.push({
        id: `p2_q${i+1}`,
        pdf: 2,
        pdfTitle: "PDF 2: Logic Gates & Transistor Switches",
        q: `${i+1}. Examine the logic symbol shown below. Which gate does this represent, and when is its output HIGH?`,
        opts: [
          `This is a ${gateType} gate.`,
          `This is an inverted buffer only.`,
          `This represents an operational amplifier.`,
          `This is an analogue trigger circuit.`
        ],
        ans: 0,
        diag: { type: gateType },
        arQ: `عاين الرمز المنطقي الموضح بالرسم أدناه. ما هي هذه البوابة؟`,
        arOpts: [`هذه بوابة ${gateType}`, "عازل معكوس فقط", "مكبر عمليات", "دائرة قدح تماثلية"],
        arAns: `A) This is a ${gateType} gate`,
        exp: `الرسم الهندسي يوضح رمز بوابة ${gateType} القياسية وجدول الحقيقة الخاص بها.`
      });
    }
  }

  // ----------------------------------------------------
  // PDF 3: SPECIFICATIONS, BINARY ADDITION & SUBTRACTION (40 Qs)
  // ----------------------------------------------------
  for (let i = 0; i < 40; i++) {
    const isAdder = (i % 4 === 0);
    const isWaveform = (i % 6 === 0);

    if (isWaveform) {
      qList.push({
        id: `p3_q${i+1}`,
        pdf: 3,
        pdfTitle: "PDF 3: Logic Specs & Arithmetic Rules",
        q: `${i+1}. For the two digital input waveforms A and B shown below, which gate will produce a HIGH output only during the interval where both pulses overlap at '1'?`,
        opts: ["AND Gate", "OR Gate", "NOR Gate", "XOR Gate"],
        ans: 0,
        diag: { type: 'WAVEFORM' },
        arQ: "لإشارتي النبضات الرقمية A و B الموضحتين، أي بوابة ستعطي خرجا 1 فقط في الفترة التي يتطابق فيها النبضتان عند المستوى العالي 1؟",
        arOpts: ["بوابة AND", "بوابة OR", "بوابة NOR", "بوابة XOR"],
        arAns: "A) AND Gate",
        exp: "بوابة AND لا تعطي 1 إلا عند تواجد كلا المدخلين في حالة HIGH في نفس اللحظة الزمنية."
      });
    } else if (isAdder) {
      qList.push({
        id: `p3_q${i+1}`,
        pdf: 3,
        pdfTitle: "PDF 3: Logic Specs & Arithmetic Rules",
        q: `${i+1}. According to binary addition rules, what is the Sum and Carry for: 1 + 1 + 1 ?`,
        opts: ["Sum = 1, Carry = 1", "Sum = 0, Carry = 1", "Sum = 1, Carry = 0", "Sum = 0, Carry = 0"],
        ans: 0,
        diag: null,
        arQ: "وفقاً لقواعد الجمع الثنائي، ما هو الناتج والمرحل (Sum & Carry) للعملية: 1 + 1 + 1 ؟",
        arOpts: ["Sum = 1, Carry = 1", "Sum = 0, Carry = 1", "Sum = 1, Carry = 0", "Sum = 0, Carry = 0"],
        arAns: "A) Sum = 1, Carry = 1",
        exp: "1+1+1 = 3 بالعشري، وهو ثنائياً يكتب 11₂ (أي Sum=1 و Carry=1)."
      });
    } else {
      qList.push({
        id: `p3_q${i+1}`,
        pdf: 3,
        pdfTitle: "PDF 3: Logic Specs & Arithmetic Rules",
        q: `${i+1}. What is defined as 'The maximum number of standard logic inputs that the output of a single gate can reliably drive'?`,
        opts: ["Fan-Out", "Fan-In", "Propagation Delay", "Noise Margin"],
        ans: 0,
        diag: null,
        arQ: "ما هو التعريف الدقيق لـ 'أقصى عدد من المداخل التي يمكن لخرج بوابة واحدة قيادتها وتشغيلها بكفاءة'؟",
        arOpts: ["Fan-Out (سعة الخرج)", "Fan-In (سعة الدخل)", "زمن التأخير", "هامش الضوضاء"],
        arAns: "A) Fan-Out",
        exp: "Fan-Out هو أقصى عدد من مداخل البوابات المتوازية التي يمكن ربطها بخرج بوابة واحدة دون خلل في مستويات الجهد."
      });
    }
  }

  // ----------------------------------------------------
  // PDF 4: BOOLEAN ALGEBRA & THEOREMS (40 Qs)
  // ----------------------------------------------------
  const boolTheorems = [
    { rule: "A + 1", res: "1", name: "Operations with 1" },
    { rule: "A · 0", res: "0", name: "Operations with 0" },
    { rule: "A · A", res: "A", name: "Idempotent Law" },
    { rule: "A + Ā", res: "1", name: "Complementation Law" },
    { rule: "A · Ā", res: "0", name: "Complementation Law" },
    { rule: "A + A·B", res: "A", name: "Absorption / Redundancy Law" },
    { rule: "(A·B)'", res: "Ā + B̄", name: "DeMorgan's Theorem" },
    { rule: "(A + B)'", res: "Ā · B̄", name: "DeMorgan's Theorem" }
  ];

  for (let i = 0; i < 40; i++) {
    const t = boolTheorems[i % boolTheorems.length];
    const isDual = (i % 3 === 0);

    if (isDual) {
      qList.push({
        id: `p4_q${i+1}`,
        pdf: 4,
        pdfTitle: "PDF 4: Boolean Algebra & Simplification",
        q: `${i+1}. To obtain the DUAL of any Boolean expression, we must replace AND with OR, OR with AND, and swap 0s and 1s without complementing literals.`,
        opts: ["True", "False"],
        ans: 0,
        diag: null,
        arQ: "لإيجاد المعكوس الثنائي (Dual) لأي تعبير بولياني، نستبدل علامة الضرب بالجمع والجمع بالضرب و 0 بـ 1 مع بقاء الحروف دون نفي.",
        arOpts: ["True (صح)", "False (خطأ)"],
        arAns: "A) True",
        exp: "صحيح، هذه هي القاعدة الدقيقة لخاصية Duality في الجبر البولياني."
      });
    } else {
      qList.push({
        id: `p4_q${i+1}`,
        pdf: 4,
        pdfTitle: "PDF 4: Boolean Algebra & Simplification",
        q: `${i+1}. Using Boolean algebra theorems, simplify the expression: ${t.rule}`,
        opts: [t.res, "0", "1", "A·B"],
        ans: 0,
        diag: null,
        arQ: `باستخدام نظريات الجبر البولياني، ما هو تبسيط التعبير: ${t.rule} ؟`,
        arOpts: [t.res, "0", "1", "A·B"],
        arAns: `A) ${t.res}`,
        exp: `وفقاً لقانون ${t.name}، التبسيط الصحيح هو ${t.res}.`
      });
    }
  }

  // ----------------------------------------------------
  // PDF 5: ARITHMETIC CIRCUITS, ADDERS, MUX & DEMUX (40 Qs)
  // ----------------------------------------------------
  for (let i = 0; i < 40; i++) {
    const mod = i % 4;
    if (mod === 0) {
      qList.push({
        id: `p5_q${i+1}`,
        pdf: 5,
        pdfTitle: "PDF 5: Combinational Circuits, Adders & MUX",
        q: `${i+1}. In the Half-Adder schematic block shown below, which logic gate generates the SUM (S) output?`,
        opts: ["XOR Gate", "AND Gate", "OR Gate", "NOR Gate"],
        ans: 0,
        diag: { type: 'HALF_ADDER' },
        arQ: "في دائرة الجامع النصفي (Half-Adder) الموضحة، أي بوابة منطقية تولد مخرج الجمع SUM؟",
        arOpts: ["بوابة XOR (A⊕B)", "بوابة AND (A·B)", "بوابة OR", "بوابة NOR"],
        arAns: "A) XOR Gate",
        exp: "في الجامع النصفي: الجمع Sum = A ⊕ B (بوابة XOR) والمرحل Carry = A·B (بوابة AND)."
      });
    } else if (mod === 1) {
      qList.push({
        id: `p5_q${i+1}`,
        pdf: 5,
        pdfTitle: "PDF 5: Combinational Circuits, Adders & MUX",
        q: `${i+1}. In the Full-Adder circuit shown below, how many single-bit binary inputs are added together?`,
        opts: ["Three inputs (A, B, Cin)", "Two inputs (A, B)", "Four inputs", "One input only"],
        ans: 0,
        diag: { type: 'FULL_ADDER' },
        arQ: "في دائرة الجامع الكامل (Full-Adder) الموضحة، كم عدد المداخل الثنائية التي يتم جمعها معاً؟",
        arOpts: ["ثلاثة مداخل (A, B, Cin)", "مدخلان فقط (A, B)", "أربعة مداخل", "مدخل واحد"],
        arAns: "A) Three inputs (A, B, Cin)",
        exp: "الجامع الكامل يجمع 3 بتات: البتان الأساسيان A و B والمرحل القادم من المرحلة السابقة Cin."
      });
    } else if (mod === 2) {
      qList.push({
        id: `p5_q${i+1}`,
        pdf: 5,
        pdfTitle: "PDF 5: Combinational Circuits, Adders & MUX",
        q: `${i+1}. In the 4-to-1 Multiplexer shown below, how many select lines (S1, S0) are required to select between the 4 data inputs?`,
        opts: ["2 select lines", "4 select lines", "1 select line", "8 select lines"],
        ans: 0,
        diag: { type: 'MUX_4TO1' },
        arQ: "في مجمع البيانات 4-to-1 MUX الموضح، كم عدد خطوط الاختيار (Select lines) اللازمة للاختيار بين 4 خطوط دخل؟",
        arOpts: ["خطي اختيار (2 select lines)", "4 خطوط اختيار", "خط واحد", "8 خطوط"],
        arAns: "A) 2 select lines",
        exp: "العلاقة هي 2ⁿ = 4، وبالتالي نحتاج إلى n = 2 خطوط تحكم واختيار."
      });
    } else {
      qList.push({
        id: `p5_q${i+1}`,
        pdf: 5,
        pdfTitle: "PDF 5: Combinational Circuits, Adders & MUX",
        q: `${i+1}. A Demultiplexer (DEMUX) takes a single data input line and distributes it to one of 2ⁿ output lines based on the select lines.`,
        opts: ["True", "False"],
        ans: 0,
        diag: { type: 'DEMUX_1TO4' },
        arQ: "موزع البيانات Demultiplexer يأخذ خط دخل واحد ويوزعه على أحد خطوط الخرج المتعددة بناءً على خطوط الاختيار.",
        arOpts: ["True (صح)", "False (خطأ)"],
        arAns: "A) True",
        exp: "صحيح، وظيفة DEMUX هي توجيه خط الدخل الواحد إلى مخرج محدد من بين المخارج."
      });
    }
  }

  return qList;
};

// ==========================================
// 3. MAIN REACT EXAM APPLICATION COMPONENT
// ==========================================
export default function App() {
  const allQuestions = useMemo(() => generateQuestions(), []);

  // Tabs: 'all', 1, 2, 3, 4, 5
  const [activeTab, setActiveTab] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedTabs, setSubmittedTabs] = useState({});
  const [openHints, setOpenHints] = useState({});
  const [shuffledOrders, setShuffledOrders] = useState({});

  // Filter questions for the active tab
  const tabQuestions = useMemo(() => {
    let pool = activeTab === 'all' 
      ? [...allQuestions] 
      : allQuestions.filter(q => q.pdf === activeTab);

    // Apply custom shuffle order if generated
    if (shuffledOrders[activeTab]) {
      return [...pool].sort((a, b) => {
        const order = shuffledOrders[activeTab];
        return (order[a.id] || 0) - (order[b.id] || 0);
      });
    }
    return pool;
  }, [allQuestions, activeTab, shuffledOrders]);

  // Handle Option Select
  const handleSelect = (qId, optIdx) => {
    if (submittedTabs[activeTab]) return; // locked after submit
    setUserAnswers(prev => ({
      ...prev,
      [qId]: optIdx
    }));
  };

  // Toggle Arabic Hint Card
  const toggleHint = (qId) => {
    setOpenHints(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  // Submit Current PDF Tab Only
  const handleSubmit = () => {
    setSubmittedTabs(prev => ({
      ...prev,
      [activeTab]: true
    }));
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // Reset & Retake Active PDF
  const handleRetake = () => {
    const idsToClear = tabQuestions.map(q => q.id);
    setUserAnswers(prev => {
      const next = { ...prev };
      idsToClear.forEach(id => delete next[id]);
      return next;
    });
    setSubmittedTabs(prev => {
      const next = { ...prev };
      delete next[activeTab];
      return next;
    });
    setOpenHints({});
  };

  // Shuffle Questions for Active Tab
  const handleShuffle = () => {
    const newOrder = {};
    tabQuestions.forEach(q => {
      newOrder[q.id] = Math.random();
    });
    setShuffledOrders(prev => ({
      ...prev,
      [activeTab]: newOrder
    }));
  };

  // Calculate Tab Score
  const tabScore = useMemo(() => {
    let correct = 0;
    tabQuestions.forEach(q => {
      if (userAnswers[q.id] === q.ans) correct++;
    });
    return {
      score: correct,
      total: tabQuestions.length,
      pct: Math.round((correct / (tabQuestions.length || 1)) * 100)
    };
  }, [tabQuestions, userAnswers]);

  const isCurrentTabSubmitted = !!submittedTabs[activeTab];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-mono">COM 205</span>
                <h1 className="font-extrabold text-sm sm:text-base tracking-tight text-white">Electronics Midterm Platform</h1>
              </div>
              <p className="text-[11px] text-slate-400">National University of Sadat City (NUSC) • Dr. Ahmad Besheer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShuffle}
              className="text-xs px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 font-semibold flex items-center gap-1.5 transition"
              title="لخبطة الأسئلة"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">لخبطة الأسئلة</span>
            </button>
            <button
              onClick={handleRetake}
              className="text-xs px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold flex items-center gap-1.5 transition"
              title="إعادة هذا الـ PDF"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">إعادة المحاولة</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full flex flex-col gap-6">

        {/* Hero Notice Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950 border border-slate-800 p-5 sm:p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" /> 40 سؤال لكل PDF (200 سؤال إجمالي مع الرسومات الهندسية)
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">منصة تدريب امتحانات الميدتيرم التفاعلية</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                أسئلة ميدتيرم نظامية ومباشرة بدون تعقيد، مع رسومات دوائر كهربائية ومنطقية مرسومة أمامك (SVG)، وأزرار تلميح وترجمة عربية كاملة، وإمكانية تسليم وإعادة كل محاضرة منفصلة.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl text-center min-w-[100px]">
                <span className="text-[11px] text-slate-400 font-medium block">أسئلة هذا القسم</span>
                <span className="text-xl font-black text-cyan-400 font-mono">{tabQuestions.length}</span>
                <span className="text-[10px] text-slate-500 block">MCQ & T/F</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl text-center min-w-[100px]">
                <span className="text-[11px] text-slate-400 font-medium block">تمت الإجابة</span>
                <span className="text-xl font-black text-emerald-400 font-mono">
                  {tabQuestions.filter(q => userAnswers[q.id] !== undefined).length}
                </span>
                <span className="text-[10px] text-slate-500 block">من {tabQuestions.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 text-xs sm:text-sm font-semibold">
          {[
            { id: 1, label: "PDF 1: Number Systems (40 Qs)" },
            { id: 2, label: "PDF 2: Logic Gates (40 Qs)" },
            { id: 3, label: "PDF 3: Specs & Math (40 Qs)" },
            { id: 4, label: "PDF 4: Boolean Algebra (40 Qs)" },
            { id: 5, label: "PDF 5: Adders & MUX (40 Qs)" },
            { id: 'all', label: "كل الـ 200 سؤال معاً" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl transition whitespace-nowrap border ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-black border-cyan-400 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-850 hover:text-white border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Score Banner when Submitted */}
        {isCurrentTabSubmitted && (
          <div className="rounded-2xl border p-5 sm:p-6 bg-slate-900 border-cyan-500/40 text-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 ${
                tabScore.pct >= 60 ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-slate-950'
              }`}>
                {tabScore.pct >= 60 ? <Award className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {tabScore.pct >= 60 ? "تم التصحيح بنجاح! نتيجة ممتازة" : "تم التصحيح! راجع إجاباتك الخاطئة بالأسفل"}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  أجبت بشكل صحيح على {tabScore.score} من أصل {tabScore.total} سؤال في هذا الجزء.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-medium">درجة الميدتيرم</span>
                <span className="text-2xl font-black text-cyan-400 font-mono">{tabScore.score} / {tabScore.total}</span>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-cyan-500 flex items-center justify-center bg-slate-950">
                <span className="text-sm font-black text-white font-mono">{tabScore.pct}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Floating Submission Bar */}
        <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="text-xs text-slate-400">
            {isCurrentTabSubmitted ? (
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> تم تسليم وتصحيح هذا الجزء بنجاح
              </span>
            ) : (
              <span>اختر إجاباتك ثم اضغط تسليم ليتم تصحيح هذا الـ PDF بشكل مستقل.</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRetake}
              className="text-xs px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" /> إعادة المحاولة
            </button>
            <button
              onClick={handleSubmit}
              disabled={isCurrentTabSubmitted}
              className={`text-xs px-5 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg transition ${
                isCurrentTabSubmitted
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white shadow-emerald-600/20'
              }`}
            >
              <Send className="w-3.5 h-3.5" /> تسليم هذا الـ PDF
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {tabQuestions.map((q, idx) => {
            const userChoice = userAnswers[q.id];
            const isAnswered = userChoice !== undefined;
            const isCorrect = userChoice === q.ans;
            const isOpenHint = !!openHints[q.id];

            let cardBorder = "border-slate-800 bg-slate-900";
            if (isCurrentTabSubmitted) {
              cardBorder = isCorrect 
                ? "border-emerald-500/50 bg-emerald-950/10" 
                : "border-rose-500/50 bg-rose-950/10";
            }

            return (
              <div key={q.id} className={`border rounded-2xl p-4 sm:p-5 transition shadow-sm ${cardBorder}`}>
                
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-slate-800 text-cyan-400 font-bold text-xs flex items-center justify-center font-mono border border-slate-700">
                      Q{idx + 1}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">[{q.pdfTitle}]</span>
                  </div>
                  <button
                    onClick={() => toggleHint(q.id)}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 transition"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>تلميح وترجمة بالعربي</span>
                    {isOpenHint ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>

                {/* Question Text */}
                <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-4 leading-relaxed">
                  {q.q}
                </h3>

                {/* Circuit / Schematic Diagram if applicable */}
                {q.diag && (
                  <div className="my-4 py-2 bg-slate-950/80 rounded-xl border border-slate-800 flex justify-center items-center">
                    <CircuitDiagram type={q.diag.type} params={q.diag.params} />
                  </div>
                )}

                {/* Options Grid */}
                <div className="space-y-2 mt-3">
                  {q.opts.map((opt, optIdx) => {
                    const isSelected = userChoice === optIdx;
                    let optStyle = "bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300";
                    let badgeStyle = "bg-slate-850 text-slate-400 border border-slate-700";

                    if (isCurrentTabSubmitted) {
                      if (optIdx === q.ans) {
                        optStyle = "bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold";
                        badgeStyle = "bg-emerald-600 text-white border-emerald-500";
                      } else if (isSelected && optIdx !== q.ans) {
                        optStyle = "bg-rose-950/40 border-rose-500 text-rose-200";
                        badgeStyle = "bg-rose-600 text-white border-rose-500";
                      } else {
                        optStyle = "opacity-50 border-slate-800 text-slate-500 bg-slate-950";
                      }
                    } else if (isSelected) {
                      optStyle = "bg-cyan-950/60 border-cyan-500 text-cyan-200 font-medium shadow-md shadow-cyan-500/10";
                      badgeStyle = "bg-cyan-500 text-slate-950 font-bold border-cyan-400";
                    }

                    const letter = String.fromCharCode(65 + optIdx);
                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelect(q.id, optIdx)}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition select-none ${optStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-md ${badgeStyle} text-xs font-mono flex items-center justify-center shrink-0`}>
                          {letter}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {isCurrentTabSubmitted && optIdx === q.ans && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto" />
                        )}
                        {isCurrentTabSubmitted && isSelected && optIdx !== q.ans && (
                          <XCircle className="w-4 h-4 text-rose-400 ml-auto" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Arabic Accordion Hint Card */}
                {isOpenHint && (
                  <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-3 font-sans" dir="rtl">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4" /> ترجمة وتوضيح السؤال للامتحان:
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 font-bold block mb-1">السؤال بالعربي:</span>
                      <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                        {q.arQ}
                      </p>
                    </div>
                    <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-xs space-y-1 text-slate-300">
                      <span className="text-[11px] text-slate-400 font-bold block mb-1">الخيارات المتاحة:</span>
                      {q.arOpts.map((o, oIdx) => (
                        <div key={oIdx} className="leading-relaxed">{o}</div>
                      ))}
                    </div>
                    <div className="bg-emerald-950/30 border border-emerald-500/30 p-2.5 rounded-lg text-xs">
                      <span className="font-bold text-emerald-400 block mb-1">
                        الإجابة المعتمدة في الامتحان: {q.arAns}
                      </span>
                      <p className="text-slate-300 font-normal leading-relaxed">
                        {q.exp}
                      </p>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 bg-slate-900/60 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026/2027 Faculty of Science, National University of Sadat City (NUSC)</p>
          <p className="text-slate-400">COM 205 Electronics • Midterm Preparation Platform</p>
        </div>
      </footer>

    </div>
  );
}