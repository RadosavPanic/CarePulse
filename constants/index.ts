export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-ivanovic.png",
    name: "Miloš Ivanović",
  },
  {
    image: "/assets/images/dr-jovanovic.png",
    name: "Jelena Jovanović",
  },
  {
    image: "/assets/images/dr-markovic.png",
    name: "Vladimir Marković",
  },
  {
    image: "/assets/images/dr-petrovic.png",
    name: "Nikola Petrović",
  },
  {
    image: "/assets/images/dr-stojanovic.png",
    name: "Ana Stojanović",
  },
  {
    image: "/assets/images/dr-radovic.png",
    name: "Stefan Radović",
  },
  {
    image: "/assets/images/dr-vasic.png",
    name: "Ljubica Vasić",
  },
  {
    image: "/assets/images/dr-djordjevic.png",
    name: "Mina Đorđević",
  },
  {
    image: "/assets/images/dr-milosevic.png",
    name: "Lazar Milošević",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
