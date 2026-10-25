import AchievementIcon from './AchievementIcon';

function AchievementCard({ achievement }) {
  return (
    <article className="group w-full max-w-[320px] min-w-0 justify-self-center sm:max-w-none">
      <div className="flex aspect-[1.35/1] items-center justify-center rounded-[18px] border border-[#e5e5e5] bg-[#fafafa] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
        <div className={`flex h-[72px] w-[72px] items-center justify-center rounded-[15px] bg-gradient-to-b text-white shadow-[0_9px_15px_rgba(0,0,0,0.18)] ${achievement.color}`}>
          <AchievementIcon type={achievement.icon} />
        </div>
      </div>
      <h3 className="mb-0 mt-4 text-[15px] font-bold leading-snug text-[#111]">
        {achievement.title}
      </h3>
      <p className="mb-0 mt-1 text-[14px] leading-relaxed text-[#858585]">
        {achievement.description}
      </p>
    </article>
  );
}

export default AchievementCard;
