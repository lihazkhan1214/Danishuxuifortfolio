export interface DropdownLink {
    name: string;
    href: string;
  }
  
  export interface DropdownLinks {
    [key: string]: DropdownLink[];
  }
  
  export const dropdownLinksData: DropdownLinks = {
    encyclopedia: [{ name: 'Ruby', href: '/encyclopedia/ruby' }, { name: 'Sapphire', href: '/encyclopedia/sapphire' },{ name: 'Tanzanite', href: '/encyclopedia/tanzanite' },{ name: 'Diamond', href: '/encyclopedia/diamond' },{ name: 'Emerald', href: '/encyclopedia/emerald' },{ name: 'Opal', href: '/encyclopedia/opal' },{ name: 'Moissanite', href: '/encyclopedia/moissanite' },{ name: 'Peridot', href: '/encyclopedia/peridot' },{ name: 'All Encyclopedia', href: '/allencyclopedia' }],
    rawStones: [{ name: 'Raw Ruby', href: '/rawstones/rawruby' }, { name: 'Raw Tanzanite', href: '/rawstones/rawtanzanite' }, { name: 'Raw Diamond', href: '/rawstones/rawdiamond' }, { name: 'Raw Emerald', href: '/rawstones/rawemerald' }, { name: 'Raw Moissanite', href: '/rawstones/rawmoissanite' }, { name: 'Raw Peridot', href: '/rawstones/rawperidot' }, { name: 'All Raw Stones', href: '/allrawgems' }],
    Articles: [{ name: 'Gemstones collecting', href: '/articles/gemstonescollecting' }, { name: 'Gemstone Beauty', href: '/articles/gemstonebeauty' }, { name: 'Gemstone Color', href: '/articles/gemstonecolor' }, { name: 'Gemstone Origins', href: '/articles/gemstoneorigins' }, { name: 'Optical Properties', href: '/articles/opticalproperties' }, { name: 'Gemstone Luster', href: '/articles/gemstoneluster' }, { name: 'All Articles', href: '/allarticles' }],
  
   
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
