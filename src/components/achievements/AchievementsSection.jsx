import achievements from '../../data/achievements';
import AchievementCard from './AchievementCard';

function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 lg:py-24 xl:scroll-mt-8" aria-labelledby="achievements-title">
      <div className="mx-auto max-w-[1050px]">
        <h2 id="achievements-title" className="mb-10 mt-0 text-[32px] font-extrabold tracking-[-0.04em] text-black">
          Achievements
        </h2>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {achievements.map((achievement) => (
            <AchievementCard
              key={`${achievement.title}-${achievement.description}`}
              achievement={achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
