import AboutUsSection from "./aboutfooter"
import HelpSection from "./helpfooter"
import NewsletterSection from "./newsletterfooter"
import RecentPostsSection from "./recentpostfooter"
import SocialIcons from "./socialiconsfooter"
import UsefulLinksSection from "./usefulllinkfooter"
export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white mt-[120px]">
      <div className="container mx-auto px-4 py-16">
      <NewsletterSection/>
        <div className="border-t border-[#FF9F0D] my-8"></div>
        <div className="flex justify-between items-center mt-[56px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection/>
          <RecentPostsSection/>
        </div>
      </div>
      <div className="bg-[#4F4F4F] py-8 flex ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] leading-6 mb-4 md:mb-0">
            Copyright © 2022 by Iqra. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}