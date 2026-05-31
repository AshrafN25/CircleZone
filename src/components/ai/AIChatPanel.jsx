import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHIP_PERTANYAAN } from '../../data/materiData';
import clsx from 'clsx';

const AIChatPanel = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Halo! Saya asisten CircleZone. Tanyakan apa saja tentang materi lingkaran! 😊'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Simulasi API call - dalam produksi, ganti dengan actual Anthropic API
      // Karena API key sensitif, ini hanya simulasi
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Simulasi response
      const assistantMessage = {
        role: 'assistant',
        content: generateSimulatedResponse(text)
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Maaf, terjadi kesalahan. Silakan coba lagi.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi simulasi response (dalam produksi, gunakan Anthropic API)
  const generateSimulatedResponse = (question) => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes('juring')) {
      return 'Juring adalah daerah dalam lingkaran yang dibatasi oleh dua jari-jari dan sebuah busur. Bayangkan seperti potongan pizza! 🍕\n\nRumus luas juring:\nL = (α/360°) × πr²\n\nDimana α adalah sudut pusat dalam derajat.';
    }
    
    if (lowerQ.includes('keliling')) {
      return 'Keliling lingkaran adalah panjang seluruh tepi lingkaran.\n\nRumus:\n• K = 2πr (jika diketahui jari-jari)\n• K = πd (jika diketahui diameter)\n\nContoh: Jika r = 7 cm, maka K = 2 × 22/7 × 7 = 44 cm';
    }
    
    if (lowerQ.includes('busur') && lowerQ.includes('tali')) {
      return 'Perbedaan busur dan tali busur:\n\n🔵 Busur: Garis lengkung pada tepi lingkaran\n🔵 Tali Busur: Garis lurus yang menghubungkan dua titik pada lingkaran\n\nDiameter adalah tali busur terpanjang karena melewati titik pusat!';
    }
    
    if (lowerQ.includes('garis singgung')) {
      return 'Garis singgung adalah garis yang menyentuh lingkaran tepat di satu titik.\n\nRumus panjang garis singgung dari titik luar:\nPT = √(PO² − r²)\n\nContoh soal:\nJika PO = 13 cm dan r = 5 cm, maka:\nPT = √(13² − 5²) = √(169 − 25) = √144 = 12 cm';
    }
    
    if (lowerQ.includes('luas')) {
      return 'Luas lingkaran adalah luas daerah di dalam lingkaran.\n\nRumus:\nL = πr²\n\nContoh: Jika r = 7 cm, maka:\nL = 22/7 × 7² = 22/7 × 49 = 154 cm²';
    }
    
    if (lowerQ.includes('sudut keliling')) {
      return 'Sudut keliling adalah sudut yang titik puncaknya berada di tepi lingkaran.\n\nHubungan penting:\n• Sudut Pusat = 2 × Sudut Keliling (jika menghadap busur yang sama)\n• Sudut keliling yang menghadap diameter selalu 90°';
    }
    
    if (lowerQ.includes('diameter')) {
      return 'Diameter adalah garis lurus yang melalui titik pusat dan menghubungkan dua titik pada lingkaran.\n\nHubungan:\n• d = 2r\n• r = d/2\n\nDiameter adalah tali busur terpanjang!';
    }
    
    if (lowerQ.includes('apotema')) {
      return 'Apotema adalah jarak terpendek dari titik pusat ke tali busur.\n\nSifat apotema:\n• Selalu tegak lurus terhadap tali busur\n• Membagi tali busur menjadi dua bagian sama panjang';
    }
    
    return 'Terima kasih atas pertanyaannya! Saya siap membantu Anda memahami materi lingkaran. Silakan tanyakan tentang:\n\n• Pengertian dan unsur-unsur lingkaran\n• Rumus keliling dan luas\n• Panjang busur dan luas juring\n• Sudut pusat dan sudut keliling\n• Garis singgung lingkaran\n• Atau topik lingkaran lainnya!';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputText);
  };

  const handleChipClick = (question) => {
    sendMessage(question);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-end lg:items-center lg:justify-end lg:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full lg:w-96 h-[80vh] lg:h-[600px] bg-surface dark:bg-gray-900 rounded-t-2xl lg:rounded-2xl shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">smart_toy</span>
              </div>
              <div>
                <h3 className="text-headline-sm text-on-surface dark:text-gray-100">Asisten AI</h3>
                <p className="text-body-sm text-on-surface-variant dark:text-gray-400">CircleZone</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface dark:text-gray-300">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={clsx(
                  'flex gap-3',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-tertiary text-sm">smart_toy</span>
                  </div>
                )}
                <div
                  className={clsx(
                    'max-w-[80%] px-4 py-2 rounded-2xl whitespace-pre-wrap',
                    message.role === 'user'
                      ? 'bg-primary text-on-primary rounded-br-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-on-surface dark:text-gray-100 rounded-bl-sm'
                  )}
                >
                  <p className="text-body-md">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary text-sm">smart_toy</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-on-surface-variant dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-on-surface-variant dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-on-surface-variant dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-body-sm text-on-surface-variant dark:text-gray-400 mb-2">Pertanyaan cepat:</p>
              <div className="flex flex-wrap gap-2">
                {CHIP_PERTANYAAN.slice(0, 4).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleChipClick(question)}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-body-sm rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Tanyakan tentang lingkaran..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-surface dark:bg-gray-800 text-on-surface dark:text-gray-100 focus:border-primary focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-variant transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIChatPanel;
