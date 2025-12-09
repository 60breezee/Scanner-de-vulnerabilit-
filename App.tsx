// import React, { useState, useCallback } from 'react';
// import { CodeInput } from './components/CodeInput';
// import { Shield } from './components/Shield';
// import { VulnerabilityList } from './components/VulnerabilityList';
// import { ParticleBackground } from './components/Particles';
// import { analyzeCode } from './services/geminiService';
// import { ScanResult } from './types';

// export default function App() {
//   const [code, setCode] = useState<string>('');
//   const [isScanning, setIsScanning] = useState(false);
//   const [shieldHealth, setShieldHealth] = useState(100);
//   const [scanResult, setScanResult] = useState<ScanResult | null>(null);
//   const [statusMessage, setStatusMessage] = useState("SYSTEM SECURE");

//   const handleScan = useCallback(async () => {
//     setIsScanning(true);
//     setStatusMessage("INITIALIZING NEURAL LINK...");
//     setScanResult(null);
    
//     // Animation effect: Randomly fluctuate health during scan
//     const fluctuateInterval = setInterval(() => {
//        setShieldHealth(Math.random() * 40 + 30);
//        const statuses = ["DECODING...", "PARSING...", "HEURISTIC ANALYSIS...", "BREACH DETECTED..."];
//        setStatusMessage(statuses[Math.floor(Math.random() * statuses.length)]);
//     }, 500);

//     try {
//       const result = await analyzeCode(code);
      
//       clearInterval(fluctuateInterval);
//       setScanResult(result);
//       setShieldHealth(result.score);
//       setStatusMessage(result.score < 50 ? "CRITICAL VULNERABILITIES" : "ANALYSIS COMPLETE");

//     } catch (e) {
//       clearInterval(fluctuateInterval);
//       setShieldHealth(0);
//       setStatusMessage("SYSTEM ERROR");
//     } finally {
//       setIsScanning(false);
//     }
//   }, [code]);

//   return (
//     <div className="min-h-screen w-full bg-grid text-gray-100 relative overflow-hidden flex flex-col">
//       <ParticleBackground />
      
//       {/* Header / Nav */}
//       <header className="p-6 flex justify-between items-center border-b border-gray-800/50 backdrop-blur-sm z-10">
//         <div className="flex items-center gap-4">
//            <div className="w-10 h-10 rounded-full bg-cyan-900/30 border border-cyan-500 flex items-center justify-center animate-pulse">
//               <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
//            </div>
//            <div>
//              <h1 className="text-2xl font-bold tracking-widest glitch-text" data-text="CYBERSHIELD.AI">CYBERSHIELD.AI</h1>
//              <p className="text-xs text-cyan-500 uppercase tracking-[0.3em]">Vulnerability Scanner v2.0</p>
//            </div>
//         </div>
//         <div className="hidden md:block text-right">
//           <div className="text-xs text-gray-500 font-mono">API STATUS: <span className="text-green-500">ONLINE</span></div>
//           <div className="text-xs text-gray-500 font-mono">LATENCY: <span className="text-cyan-500">12ms</span></div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex flex-col items-center justify-start pt-10 px-4 z-10">
        
//         {/* Status Bar */}
//         <div className="w-full max-w-4xl mb-8 flex items-center justify-center">
//            <div className="px-4 py-1 border-l-2 border-r-2 border-cyan-500/30 bg-black/60 backdrop-blur text-cyan-400 font-mono text-sm uppercase tracking-widest">
//              Status: {statusMessage}
//            </div>
//         </div>

//         {/* Visualization Area */}
//         <div className="relative mb-10 group">
//            <Shield health={shieldHealth} isScanning={isScanning} />
           
//            {/* Decorative floor glow */}
//            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-10 bg-cyan-500/20 blur-[50px] rounded-full"></div>
//         </div>

//         {/* Interactions */}
//         <CodeInput 
//           code={code} 
//           setCode={setCode} 
//           isScanning={isScanning} 
//           onScan={handleScan} 
//         />

//         {/* Results */}
//         <VulnerabilityList result={scanResult} />

//       </main>

//       {/* Footer */}
//       <footer className="py-6 text-center text-gray-600 text-xs font-mono border-t border-gray-900 z-10">
//          CYBERSHIELD SECURITY SYSTEMS &copy; 2024 | POWERED BY GEMINI 2.5 FLASH
//       </footer>

//     </div>
//   );
// }





import React, { useState, useCallback } from 'react';
import { CodeInput } from './components/CodeInput';
import { Shield } from './components/Shield';
import { VulnerabilityList } from './components/VulnerabilityList';
import { ParticleBackground } from './components/Particles';
import { FileUploader } from './components/FileUploader';
import { analyzeCode } from './services/geminiService';
import { ScanResult } from './types';

export default function App() {
  const [code, setCode] = useState<string>('');
  const [isScanning, setIsScanning] = useState(false);
  const [shieldHealth, setShieldHealth] = useState(100);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [statusMessage, setStatusMessage] = useState("SYSTEM SECURE");

  const handleScan = useCallback(async () => {
    setIsScanning(true);
    setStatusMessage("INITIALIZING NEURAL LINK...");
    setScanResult(null);
    
    // Animation effect: Randomly fluctuate health during scan
    const fluctuateInterval = setInterval(() => {
       setShieldHealth(Math.random() * 40 + 30);
       const statuses = ["DECODING...", "PARSING...", "HEURISTIC ANALYSIS...", "BREACH DETECTED..."];
       setStatusMessage(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 500);

    try {
      const result = await analyzeCode(code);
      
      clearInterval(fluctuateInterval);
      setScanResult(result);
      setShieldHealth(result.score);
      setStatusMessage(result.score < 50 ? "CRITICAL VULNERABILITIES" : "ANALYSIS COMPLETE");

    } catch (e) {
      clearInterval(fluctuateInterval);
      setShieldHealth(0);
      setStatusMessage("SYSTEM ERROR");
    } finally {
      setIsScanning(false);
    }
  }, [code]);

  const handleFileUpload = (content: string) => {
    setCode(content);
    setStatusMessage("FILE INGESTED. WAITING FOR SCAN COMMAND.");
  };

  return (
    <div className="min-h-screen w-full bg-grid text-gray-100 relative overflow-hidden flex flex-col">
      <ParticleBackground />
      
      {/* Header / Nav */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800/50 backdrop-blur-sm z-10">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-full bg-cyan-900/30 border border-cyan-500 flex items-center justify-center animate-pulse">
              <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
           </div>
           <div>
             <h1 className="text-2xl font-bold tracking-widest glitch-text" data-text="CYBERSHIELD.AI">CYBERSHIELD.AI</h1>
             <p className="text-xs text-cyan-500 uppercase tracking-[0.3em]">Vulnerability Scanner v2.0</p>
           </div>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-xs text-gray-500 font-mono">API STATUS: <span className="text-green-500">ONLINE</span></div>
          <div className="text-xs text-gray-500 font-mono">LATENCY: <span className="text-cyan-500">12ms</span></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start pt-10 px-4 z-10">
        
        {/* Status Bar */}
        <div className="w-full max-w-4xl mb-8 flex items-center justify-center">
           <div className="px-4 py-1 border-l-2 border-r-2 border-cyan-500/30 bg-black/60 backdrop-blur text-cyan-400 font-mono text-sm uppercase tracking-widest">
             Status: {statusMessage}
           </div>
        </div>

        {/* Visualization Area */}
        <div className="relative mb-10 group">
           <Shield health={shieldHealth} isScanning={isScanning} />
           
           {/* Decorative floor glow */}
           <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-10 bg-cyan-500/20 blur-[50px] rounded-full"></div>
        </div>

        {/* File Upload Area */}
        <FileUploader 
          onFileUpload={handleFileUpload} 
          isScanning={isScanning} 
        />

        {/* Interactions */}
        <CodeInput 
          code={code} 
          setCode={setCode} 
          isScanning={isScanning} 
          onScan={handleScan} 
        />

        {/* Results */}
        <VulnerabilityList result={scanResult} />

      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-xs font-mono border-t border-gray-900 z-10">
         CYBERSHIELD SECURITY SYSTEMS &copy; 2024 | POWERED BY GEMINI 2.5 FLASH
      </footer>

    </div>
  );
}