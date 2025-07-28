import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import cplusIcon from "@/assets/icons/c++.svg";
import PythonIcon from "@/assets/icons/python.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import {CardHeader} from "@/components/CardHeader";
import {ToolboxItems} from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindIcon ,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'C++',
    iconType: cplusIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon ,
  },
  {
    title: 'Github',
    iconType: GithubIcon ,
  },
]

const hobbies = [
{
  title: 'Painting',
  emoji: '🎨',
  left: "5%",
  top: "5%",
},
{
  title: 'Photography',
  emoji: '📷',
  left: "47%",
  top: "5%",
},
{
  title: 'Gaming',
  emoji: '🎮',
  left: "5%",
  top: "35%",
},
{
  title: 'Treking',
  emoji: '🏔️',
  left: "50%",
  top: "35%",
},
{
  title: 'Music',
  emoji: '🎵',
  left: "50%",
  top: "65%",
},
{
  title: 'Reading',
  emoji: '📚',
  left: "5%",
  top: "65%",
}
]

export const AboutSection = () => {
  return (
  <div className="py-16 lg:py-28">
     <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me."
    />
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
      <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader
        title="My Reads" description="Explore the books shaping my prespective." />
          <div className="w-40 mx-auto mt-2 md:mt-0">
          <Image src={bookImage} alt="Book Cover" />
          </div>
      </Card>
      <Card className="h-[320px] md:col-span-3 lg:col-span-2">
        <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." className=""/>
        <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
        <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
      </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
        <CardHeader title="Beyond the Code" description="Explore my intrest and hobbies beyond the digital realm." className="px-6 pt-6"/>
        <div className="relative flex-1"> 
          {hobbies.map((hobby) => (
            <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
            style={{
              left: hobby.left,
              top: hobby.top,
            }}>
              <span className="font-medium text-gray-950">{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
        <Image src={mapImage} alt="map" className="h-full w-full object-cover" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
        <Image src={smileMemoji} alt="smiling memoji" className="size-20"/>
        </div>
      </Card>
      </div>
    </div>
  </div>
  </div>
  );
};
