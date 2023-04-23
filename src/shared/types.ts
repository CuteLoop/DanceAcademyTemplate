export enum SelectedPage {
  Home = "Inicio",
  Benefits = "Nosotros",
  OurClasses = "Nuestras Clases",
  ContactUs = "Contactanos",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
