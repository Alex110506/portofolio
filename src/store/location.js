import { locations } from "#constants";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

const DEFAULT_LCOATION = locations.work

const useLocationStore = create(immer((set) => ({
    activeLocation: locations.work,

    setActiveLocation: (location = null) => set((state) => {
        state.activeLocation = location
    }),
    resetActiveLocation:()=>set((state)=>{
        state.activeLocation=DEFAULT_LCOATION
    })
})))

export default useLocationStore