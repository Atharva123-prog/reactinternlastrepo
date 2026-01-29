import React from 'react';
import { Building2, TrendingUp, ArrowRight, Heart, Check, X, IndianRupee, Wrench, Home, Settings } from 'lucide-react';
import { StatBox, FunnelCol, TowerCard, SimpleStat, RatingCircle, ReviewCard } from '../components/DashboardWidgets';

const Overview = () => {
  return (
    <>
      {/* STATS SECTION */}
      <div className="p-6 border-b border-slate-100 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <StatBox label="Total Units" val="255" icon={Building2} iconBg="bg-[#0055a5]" cardBg="bg-[#f0f7ff]" />
          <StatBox label="Available Units" val="120" icon={Building2} iconBg="bg-[#fbbd05]" cardBg="bg-[#fffdf2]" />
          <StatBox label="Sold Units" val="135" icon={Building2} iconBg="bg-[#00ad33]" cardBg="bg-[#f3fff6]" />
          <StatBox label="Total Sales Value" val="2.3 Cr" icon={TrendingUp} iconBg="bg-[#ef4444]" cardBg="bg-[#fff5f5]" />
          <StatBox label="Conversion Rate" val="15%" icon={ArrowRight} iconBg="bg-[#f000b8]" cardBg="bg-[#fff1fd]" />
          <StatBox label="Project Health" val="Average" icon={Heart} iconBg="bg-[#9c27b0]" cardBg="bg-[#fbf4ff]" />
        </div>
      </div>

      {/* LEAD FUNNEL STATUS */}
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-[16px] font-bold text-slate-800 mb-5">Lead Funnel Status</h3>
        <div className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-wrap lg:flex-nowrap justify-between gap-4 h-auto lg:h-72">
          <FunnelCol label="New Leads" fill={10} color="bg-[#2196f3]" />
          <FunnelCol label="Contacted" fill={10} color="bg-[#01579b]" />
          <FunnelCol label="Site Visit" fill={6} color="bg-[#e69b00]" />
          <FunnelCol label="Negotiation" fill={9} color="bg-[#f2d024]" />
          <FunnelCol label="Booked" fill={5} color="bg-[#00a637]" />
          <FunnelCol label="Lost" fill={7} color="bg-[#f23c2d]" />
        </div>
      </div>

      {/* INVENTORY SNAPSHOT */}
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-[16px] font-bold text-slate-800 mb-5">Inventory Snapshot</h3>
        <div className="bg-white border border-slate-100 rounded-2xl p-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <TowerCard name="Tower A" btnText="See Price" bgClass="bg-[#effcf5]" btnClass="bg-[#2196f3] text-white hover:bg-blue-600" floors="15" bhk2="25" bhk3="36" bhk4="Sold" />
            <TowerCard name="Tower B" btnText="Availability" bgClass="bg-[#fff5f5]" btnClass="bg-white text-[#2196f3] border border-[#2196f3] hover:bg-blue-50" floors="20" bhk2="25 Lakh" bhk3="30 Lakh" bhk4="50 Lakh" />
            <TowerCard name="Tower C" btnText="See Price" bgClass="bg-[#f0f9ff]" btnClass="bg-[#2196f3] text-white hover:bg-blue-600" floors="16" bhk2="25" bhk3="36" bhk4="Sold" />
          </div>
        </div>
      </div>

      {/* BOOKING & PAYMENT */}
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-[16px] font-bold text-slate-800 mb-5">Booking & Payment Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SimpleStat label="Total Booking" val="25" Icon={Building2} bg="bg-[#f2f8ff]" iconBg="bg-[#0055a5]" />
            <SimpleStat label="Confirmed Booking" val="18" Icon={Check} bg="bg-[#f3fff6]" iconBg="bg-[#00ad33]" />
            <SimpleStat label="Cancelled Booking" val="3" Icon={X} bg="bg-[#fff5f5]" iconBg="bg-[#ef4444]" />
            <SimpleStat label="Total Amount Received" val="90.3 Lakh" Icon={IndianRupee} bg="bg-[#f0ffff]" iconBg="bg-[#00bcd4]" />
            <SimpleStat label="Pending Amount" val="3.6 Cr" Icon={IndianRupee} bg="bg-[#fff9f2]" iconBg="bg-[#ff9800]" />
        </div>
      </div>

      {/* RATINGS & REVIEWS */}
      <div className="p-6">
        <h3 className="text-[16px] font-bold text-slate-800 mb-5">Ratings & Reviews</h3>
        <div className="bg-white border border-slate-100 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 px-4">
            <RatingCircle label="Construction" Icon={Wrench} percent={80} />
            <RatingCircle label="Connectivity" Icon={Home} percent={80} />
            <RatingCircle label="Management" Icon={Settings} percent={80} />
          </div>
          <div className="space-y-4 relative">
            <p className="text-[14px] font-bold text-slate-800">Pending Reviews</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ReviewCard name="Atul Kumar Patel" />
              <ReviewCard name="Atul Kumar Patel" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;