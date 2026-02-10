import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const Tabs = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "underline",
  className = "",
  children,
  animatedUnderline = true,
}) => {
  const activeTabLineRef = useRef(null);
  const activeTabRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const activeTabIndex = tabs.findIndex((t) => t.id === activeTab);

  // Function to move the blue underline
  const moveUnderline = (btn) => {
    if (!btn || !activeTabLineRef.current) return;
    activeTabLineRef.current.style.width = btn.offsetWidth + "px";
    activeTabLineRef.current.style.left = btn.offsetLeft + "px";
  };

  // Function to handle horizontal scrolling via button
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (variant === "underline" && animatedUnderline) {
      moveUnderline(activeTabRef.current);
    }
  }, [activeTab, variant, animatedUnderline]);

  return (
    <>
      <div className={`relative flex items-center bg-white border-b border-slate-100 ${className}`}>
        {/* Scrollable Container with hidden scrollbar */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 flex overflow-x-auto no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Internal CSS to hide scrollbar for Chrome/Safari */}
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="flex relative">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  ref={isActive ? activeTabRef : null}
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    flex items-center gap-1 whitespace-nowrap font-medium transition-colors cursor-pointer py-4 px-1 mr-8 relative
                    ${isActive ? "text-blue-600 font-bold" : "text-slate-500 hover:text-slate-800"}
                  `}
                >
                  {tab.label}
                </button>
              );
            })}

            {/* Animated Underline */}
            {variant === "underline" && animatedUnderline && (
              <div
                ref={activeTabLineRef}
                className="absolute bottom-0 h-[3px] bg-blue-600 rounded-t-full transition-all duration-300 ease-out"
              />
            )}
          </div>
        </div>

        {/* The Tab-like Scroll Button on the Right */}
        <div className="pl-4 pr-2 bg-white flex items-center">
          <button 
            onClick={scrollRight}
            className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm"
          >
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full">
        {Array.isArray(children) ? children[activeTabIndex] : children}
      </div>
    </>
  );
};

export default Tabs;