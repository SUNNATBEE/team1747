import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "С чего начать работу с 1С-Товары?",
      answer: "Для начала работы с 1С-Товары необходимо зарегистрироваться на платформе, настроить основные параметры учета и загрузить первоначальные данные о товарах и контрагентах."
    },
    {
      question: "Как подключить 1С-Ритейл Чекер и 1С-Товары?",
      answer: "Для подключения необходимо выполнить следующие шаги:\n\n• Консультация специалиста для настройки интеграции\n• Настройка параметров синхронизации для корректной работы\n• Во время процесса синхронизации сотрудники не смогут работать с системой\n• После завершения синхронизации можно будет полноценно использовать функционал"
    },
    {
      question: "Сколько чек, о чем нам может рассказать?",
      answer: "Чек содержит информацию о покупках клиента, времени совершения покупки, способах оплаты и других важных данных для анализа продаж."
    },
    {
      question: "Сценарии автозаказа сервиса 1С-Товары",
      answer: "Система автозаказа позволяет автоматически формировать заказы поставщикам на основе установленных правил, остатков товаров и прогнозов продаж."
    },
    {
      question: "Как подключить 1С-Ритейл Чекер и 1С-Товары?",
      answer: "Процесс подключения включает настройку интеграции между системами, синхронизацию данных и тестирование работы всех компонентов."
    },
    {
      question: "Методы и формулы расчета торговой наценки",
      answer: "Торговая наценка рассчитывается различными методами в зависимости от типа товара, стратегии ценообразования и рыночных условий."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 hover:text-blue-700 transition-colors duration-300">Ответы на вопросы</h1>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
            >
              <h3 className="text-lg font-medium text-gray-800 pr-4 group-hover:text-blue-800 transition-colors duration-300">
                {item.question}
              </h3>
              <div className="flex-shrink-0">
                {openItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
                )}
              </div>
            </button>
            
            {openItems.has(index) && (
              <div className="px-6 pb-4">
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line animate-fade-in">
                    {item.answer}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;