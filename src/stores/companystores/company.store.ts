import { Company } from "src/interfaces";
import { create } from "zustand";

interface ICompanyStore {
    company: Company | null;
    setCompany: (company: Company) => void;
    resetCompany: () => void;
}

const companyStore = create<ICompanyStore>((set) => ({
    company: null,
    setCompany: (company:Company) => set((state) => ({ ...state, company})),
    resetCompany: () => set ((state) => ({ ...state, company: null})),
}));

export default companyStore;