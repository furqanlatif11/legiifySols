
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'premium';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}
