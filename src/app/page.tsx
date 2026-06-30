import AccessSection from "@/components/AccessSection";
import ConceptSection from "@/components/ConceptSection";
import ContactSection from "@/components/ContactSection";
import CoverSection from "@/components/CoverSection";
import HeroSection from "@/components/HeroSection";
import MenuBooksSection from "@/components/MenuBooksSection";
import PageFlipShell from "@/components/PageFlipShell";
import RuleSection from "@/components/RuleSection";
import ScheduleSection from "@/components/ScheduleSection";

const pages = [
  { id: "cover", label: "Cover", component: <CoverSection /> },
  { id: "hero", label: "Hero", component: <HeroSection /> },
  { id: "schedule", label: "Schedule", component: <ScheduleSection /> },
  { id: "concept", label: "Concept", component: <ConceptSection /> },
  { id: "rule", label: "Rule", component: <RuleSection /> },
  { id: "menu", label: "Menu / Books", component: <MenuBooksSection /> },
  { id: "access", label: "Access", component: <AccessSection /> },
  { id: "contact", label: "Contact", component: <ContactSection /> }
];

export default function Home() {
  return <PageFlipShell pages={pages} />;
}
