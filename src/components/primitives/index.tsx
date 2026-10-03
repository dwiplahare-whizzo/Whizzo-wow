/* Barrel file — every page imports from "@/components/primitives" (this
   folder), never from an individual file below, so this re-export list
   is what keeps that import path working. Split by concern:
     button.tsx  Button
     layout.tsx  Container, Section, SectionHead, AnnounceBar, PageHero, Prose
     hero.tsx    Hero
     cta.tsx     CtaBand, StatBand
     cards.tsx   SpecList, FeatureGrid, MaterialCardGrid, ProcessDiagram,
                 LeadershipGrid, ProjectGrid */
export * from "./button";
export * from "./layout";
export * from "./hero";
export * from "./cta";
export * from "./cards";
export * from "./tables";
