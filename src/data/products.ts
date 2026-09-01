import { Product } from '../types';
import galvanisedJackUHeadImg from '../assets/images/galvanised_jack_u_head_1788218071866.jpg';
import h20Beam29mImg from '../assets/images/h20_beam_29m_product_1788218486010.jpg';
import h20Beam39mImg from '../assets/images/h20_beam_39m_product_1788218500360.jpg';
import h20BeamLanaImg from '../assets/images/h20_beam_lana_blue_1788218515641.jpg';
import jackFlatBasePlateImg from '../assets/images/jack_flat_base_plate_1788218530547.jpg';
import uHeadJacksSetImg from '../assets/images/u_head_jacks_set_1788218545203.jpg';
import tieRodImg from '../assets/images/tie_rod_different_sizes_1788219518457.jpg';
import superPlateImg from '../assets/images/super-plate.jpeg';
import forkHeadImg from '../assets/images/Fork-head.jpeg';
import basePlateImg from '../assets/images/Base-plate.jpeg';
import scaffoldingFrameworkImg from '../assets/images/scaffold_frame_unit_1788249796432.jpg';
import casterWheelsImg from '../assets/images/Caster-wheel.jpeg';
import galvWireClampsImg from '../assets/images/Galvanised-turning-clamps.jpeg';
import pipeJoinersImg from '../assets/images/Galvanised-joiner.jpeg';
import redTurningClampImg from '../assets/images/red-turning-clamps.jpeg';
import redJointClampImg from '../assets/images/red-joint-clamps.jpeg';
import fClampImg from '../assets/images/F-clamp.jpeg';
import blackSteelPipesImg from '../assets/images/black_pipes_warehouse_1788249862762.jpg';
import steelPlankImg from '../assets/images/steel-plank.jpeg';
import redFixedClampsImg from '../assets/images/red-fixed-clamps.jpeg';
import galvSteelPipesImg from '../assets/images/Galvanised-pipes-in-different-sizes.jpeg';
import marineBoardImg from '../assets/images/marine_board_film_1788220577902.jpg';
import yellowBoardImg from '../assets/images/yellow_form_board_1788220592455.jpg';
import springRapidClampImg from '../assets/images/spring-rapid-clamp.jpeg';
import adjustableSteelPropsImg from '../assets/images/Adjustable-Scaffolding-Steel-Props.jpeg';
import scaffoldingPipesTieRodImg from '../assets/images/Scaffolding-Pipes-and-Tie Rod.jpeg';

export const CATEGORIES_LIST = [
  { id: 'all', label: 'All Products', icon: 'Grid' },
  { id: 'scaffolding-support', label: 'Scaffolding & Support', icon: 'Building2' },
  { id: 'formwork-jacks', label: 'Formwork & Acrow Jacks', icon: 'Layers' },
  { id: 'clamps-connectors', label: 'Clamps & Couplers', icon: 'Wrench' },
  { id: 'steel-pipes', label: 'Steel Pipes & Tubes', icon: 'Boxes' },
  { id: 'boards-materials', label: 'Boards & Shuttering', icon: 'Maximize2' },
] as const;

export const PRODUCTS_DATA: Product[] = [
  // 1-3: H20 Beams
  {
    id: 'h20-beam-2-9m',
    name: 'H20 Beam – 2.9m',
    category: 'scaffolding-support',
    categoryLabel: 'Scaffolding & Support',
    shortDescription: 'Engineered wooden I-beam designed as primary and secondary support joists for concrete formwork and slab casting.',
    variantsOrSizes: ['2.9 Meters Length', 'Standard Flange & Web'],
    imageUrl: h20Beam29mImg,
    altText: 'H20 Beam 2.9m timber formwork beam',
    applications: ['Slab Formwork', 'Wall Shuttering', 'Girder Support'],
    featured: true,
  },
  {
    id: 'h20-beam-3-9m',
    name: 'H20 Beam – 3.9m',
    category: 'scaffolding-support',
    categoryLabel: 'Scaffolding & Support',
    shortDescription: 'Heavy-duty structural wooden I-beam utilized for intermediate slab span formwork support in building construction.',
    variantsOrSizes: ['3.9 Meters Length', 'Yellow Protective Cap Ends'],
    imageUrl: h20Beam39mImg,
    altText: 'H20 Beam 3.9m structural timber formwork',
    applications: ['Intermediate Spans', 'Slab Casting', 'Civil Shuttering'],
  },
  {
    id: 'h20-beam-4-9m',
    name: 'H20 Beam – 4.9m',
    category: 'scaffolding-support',
    categoryLabel: 'Scaffolding & Support',
    shortDescription: 'Long-span engineered timber H20 formwork beam for extensive concrete slab and beam casting projects.',
    variantsOrSizes: ['4.9 Meters Length', 'High Rigidity'],
    imageUrl: h20BeamLanaImg,
    altText: 'H20 Beam 4.9m long span formwork joist',
    applications: ['Long Span Slabs', 'Bridge Formwork', 'Heavy Slab Support'],
  },

  // 4-5: Galvanised Jacks
  {
    id: 'galvanised-jack-u-head',
    name: 'Galvanised Jack U Head',
    category: 'formwork-jacks',
    categoryLabel: 'Formwork & Acrow Jacks',
    shortDescription: 'Adjustable hot-dip galvanised screw jack with a U-shaped top plate engineered to securely hold and level H20 timber beams.',
    variantsOrSizes: ['Galvanised Finish', 'Adjustable Threaded Height', 'U-Head Plate'],
    imageUrl: galvanisedJackUHeadImg,
    altText: 'Galvanised Jack U Head for formwork beam support',
    applications: ['H20 Beam Holding', 'Formwork Leveling', 'Slab Shoring'],
    featured: true,
  },
  {
    id: 'galvanised-jack-flat-head',
    name: 'Galvanised Jack Flat Head',
    category: 'formwork-jacks',
    categoryLabel: 'Formwork & Acrow Jacks',
    shortDescription: 'Galvanised adjustable base screw jack fitted with a solid flat steel plate for leveling scaffolding uprights on firm ground.',
    variantsOrSizes: ['Galvanised Finish', 'Flat Bearing Base', 'Adjustable Height'],
    imageUrl: jackFlatBasePlateImg,
    altText: 'Galvanised Jack Flat Head base leveling screw jack',
    applications: ['Base Leveling', 'Shoring Tower Support', 'Scaffolding Bases'],
  },

  // 6: Black Jacks
  {
    id: 'black-jack-u-head',
    name: 'Black Jack U Head',
    category: 'formwork-jacks',
    categoryLabel: 'Formwork & Acrow Jacks',
    shortDescription: 'Heavy-duty painted black acrow screw jack featuring a sturdy U-head designed to cradle timber joists and formwork beams.',
    variantsOrSizes: ['Black Enamel Coated', 'Heavy-Duty Thread', 'U-Head Cradle'],
    imageUrl: uHeadJacksSetImg,
    altText: 'Black Jack U Head steel acrow screw jack',
    applications: ['Beam Support', 'Heavy Formwork', 'Structural Shoring'],
  },

  // Formwork & Hardware Accessories
  {
    id: 'super-plate',
    name: 'Super Plate',
    category: 'formwork-jacks',
    categoryLabel: 'Formwork & Acrow Jacks',
    shortDescription: 'Cast steel combined wing nut and large round bearing washer plate for fastening tie rods firmly against formwork timber.',
    variantsOrSizes: ['Heavy-Duty Cast Steel', 'Integrated Wing Nut & Plate'],
    imageUrl: superPlateImg,
    altText: 'Super Plate cast steel formwork wing nut plate',
    applications: ['Tie Rod Clamping', 'Formwork Locking', 'Slab & Wall Shuttering'],
  },
  {
    id: 'fork-head',
    name: 'Fork Head',
    category: 'scaffolding-support',
    categoryLabel: 'Scaffolding & Support',
    shortDescription: 'Four-way heavy steel forkhead adapter designed to sit atop acrow props and scaffolding to firmly cradle one or two H20 beams.',
    variantsOrSizes: ['4-Way Prongs', 'Drop-In Prop Spigot Fitting'],
    imageUrl: forkHeadImg,
    altText: 'Fork Head 4-way support adapter for scaffolding and formwork',
    applications: ['Double H20 Support', 'Prop Top Adapter', 'Beam Cradle'],
  },
  {
    id: 'base-plate',
    name: 'Base Plate',
    category: 'scaffolding-support',
    categoryLabel: 'Scaffolding & Support',
    shortDescription: 'Solid pressed steel base plate used at the bottom of scaffolding standard tubes to distribute vertical load evenly on soil or concrete.',
    variantsOrSizes: ['Standard Steel Base', 'Central Locating Spigot'],
    imageUrl: basePlateImg,
    altText: 'Base Plate steel foundation base for scaffolding tubes',
    applications: ['Scaffolding Foundation', 'Ground Bearing', 'Load Distribution'],
  },

  // 11-13: Scaffolding Framework, Planks, Wheels
  {
    id: 'scaffolding-framework',
    name: 'Scaffolding Framework',
    category: 'scaffolding-support',
    categoryLabel: 'Scaffolding & Support',
    shortDescription: 'Heavy-duty modular steel scaffolding frame units and cross-braces designed for structural support and exterior building access.',
    variantsOrSizes: ['Standard Modular Frames', 'Lock-Pin Bracing System'],
    imageUrl: scaffoldingFrameworkImg,
    altText: 'Scaffolding Framework modular construction towers',
    applications: ['Building Construction', 'Façade Access', 'Heavy Shoring'],
    featured: true,
  },
  {
    id: 'steel-plank',
    name: 'Steel Plank',
    category: 'scaffolding-support',
    categoryLabel: 'Scaffolding & Support',
    shortDescription: 'Non-slip perforated galvanized steel walkboard designed to provide safe, rigid working platforms across scaffolding bays.',
    variantsOrSizes: ['Perforated Non-Slip Surface', 'Interlocking Safety Hooks'],
    imageUrl: steelPlankImg,
    altText: 'Steel Plank perforated metal catwalk platform',
    applications: ['Working Platforms', 'Scaffolding Catwalks', 'Safety Walkways'],
  },
  {
    id: 'caster-wheel',
    name: 'Caster Wheel',
    category: 'scaffolding-support',
    categoryLabel: 'Scaffolding & Support',
    shortDescription: 'Heavy-duty polyurethane and steel caster wheel equipped with safety dual-action foot brakes for mobile scaffolding towers.',
    variantsOrSizes: ['Heavy-Duty Swivel', 'Integrated Foot Brake Lock'],
    imageUrl: casterWheelsImg,
    altText: 'Caster Wheel heavy duty lockable scaffolding wheel',
    applications: ['Mobile Scaffolding', 'Rolling Towers', 'Industrial Transport'],
  },

  // 15-20: Clamps & Connectors
  {
    id: 'galvanised-turning-clamps',
    name: 'Galvanised Turning Clamps',
    category: 'clamps-connectors',
    categoryLabel: 'Clamps & Couplers',
    shortDescription: 'Galvanised swivel clamp coupler engineered to connect two scaffolding pipes securely at any arbitrary angle.',
    variantsOrSizes: ['Hot-Dip Galvanised', '360° Swivel Rotation', 'Heavy T-Bolts'],
    imageUrl: galvWireClampsImg,
    altText: 'Galvanised Turning Clamps swivel coupler for scaffolding',
    applications: ['Diagonal Bracing', 'Angle Pipe Connection', 'Scaffolding Towers'],
    featured: true,
  },
  {
    id: 'galvanised-joiner',
    name: 'Galvanised Joiner',
    category: 'clamps-connectors',
    categoryLabel: 'Clamps & Couplers',
    shortDescription: 'Galvanised external or internal sleeve joiner coupler used for axial end-to-end connection of scaffolding pipes.',
    variantsOrSizes: ['Galvanised Finish', 'Internal / External Joint Option'],
    imageUrl: pipeJoinersImg,
    altText: 'Galvanised Joiner pipe sleeve connector',
    applications: ['Pipe Extension', 'End-to-End Jointing', 'Upright Height Extension'],
  },
  {
    id: 'red-turning-clamps',
    name: 'Red Turning Clamps',
    category: 'clamps-connectors',
    categoryLabel: 'Clamps & Couplers',
    shortDescription: 'Heavy-duty red-coated swivel coupler clamp for joining scaffolding structural pipes at flexible intersecting angles.',
    variantsOrSizes: ['Red Enamel Painted', '360° Swivel Rotation', 'High Tensile Bolt'],
    imageUrl: redTurningClampImg,
    altText: 'Red Turning Clamps heavy-duty scaffolding swivel clamp',
    applications: ['Structural Bracing', 'Angle Jointing', 'Site Scaffolding'],
  },
  {
    id: 'red-fixed-clamps',
    name: 'Red Fixed Clamps',
    category: 'clamps-connectors',
    categoryLabel: 'Clamps & Couplers',
    shortDescription: 'Rigid 90-degree right-angle scaffolding coupler clamp coated in red enamel for fixed structural load-bearing tube joints.',
    variantsOrSizes: ['Red Enamel Painted', '90° Rigid Right Angle', 'Forged Steel Body'],
    imageUrl: redFixedClampsImg,
    altText: 'Red Fixed Clamps 90 degree right angle scaffolding coupler',
    applications: ['Standard Right Angle Ties', 'Ledger Attachment', 'Load Bearing Ties'],
    featured: true,
  },
  {
    id: 'red-joint-clamps',
    name: 'Red Joint Clamps',
    category: 'clamps-connectors',
    categoryLabel: 'Clamps & Couplers',
    shortDescription: 'Red-painted sleeve joint clamp designed for connecting scaffolding pipes end-to-end to extend structural uprights safely.',
    variantsOrSizes: ['Red Enamel Painted', 'Sleeve Coupler Mechanism'],
    imageUrl: redJointClampImg,
    altText: 'Red Joint Clamps sleeve coupler for pipe extension',
    applications: ['Vertical Pipe Extension', 'End Joint Connection', 'Structural Framing'],
  },
  {
    id: 'f-clamp',
    name: 'F Clamp',
    category: 'clamps-connectors',
    categoryLabel: 'Clamps & Couplers',
    shortDescription: 'Heavy-duty cast steel F-style sliding arm clamp used by carpenters and metal fabricators for temporary holding and clamping.',
    variantsOrSizes: ['Different Opening Capacities', 'Quick-Slide Steel Bar'],
    imageUrl: fClampImg,
    altText: 'F Clamp heavy duty metalworking and carpentry clamp',
    applications: ['Formwork Alignment', 'Woodworking', 'Steel Fabrication'],
  },

  // 21-22: Steel Pipes & Metal Products
  {
    id: 'black-pipes',
    name: 'Black Pipes – Different Sizes',
    category: 'steel-pipes',
    categoryLabel: 'Steel Pipes & Tubes',
    shortDescription: 'Industrial grade black mild steel round hollow pipes for structural scaffolding, fabrication, and building installations.',
    variantsOrSizes: ['Multiple Diameters Available', 'Standard & Heavy Gauges', 'Standard 6m / Custom Cuts'],
    imageUrl: blackSteelPipesImg,
    altText: 'Black Pipes industrial mild steel round tubes',
    applications: ['Scaffolding Systems', 'Structural Fabrication', 'Handrails & Framing'],
    featured: true,
  },
  {
    id: 'galvanised-pipes',
    name: 'Galvanised Pipes – Different Sizes',
    category: 'steel-pipes',
    categoryLabel: 'Steel Pipes & Tubes',
    shortDescription: 'Hot-dipped galvanised steel round pipes with superior corrosion resistance for durable scaffolding and civil plumbing works.',
    variantsOrSizes: ['Multiple Diameters Available', 'Hot-Dipped Galvanised', 'High Weather Resistance'],
    imageUrl: galvSteelPipesImg,
    altText: 'Galvanised Pipes hot dipped rust resistant steel pipes',
    applications: ['Outdoor Scaffolding', 'Industrial Infrastructure', 'Structural Supports'],
    featured: true,
  },

  // 23-24: Boards & Construction Materials
  {
    id: 'marine-board',
    name: 'Marine Board – Different Sizes',
    category: 'boards-materials',
    categoryLabel: 'Boards & Shuttering',
    shortDescription: 'High-density phenolic film-faced waterproof plywood board engineered for smooth concrete surface finishes and repeated formwork pours.',
    variantsOrSizes: ['18mm Standard Thickness', 'Different Sheet Dimensions Available', 'Waterproof Phenolic Film'],
    imageUrl: marineBoardImg,
    altText: 'Marine Board film faced waterproof formwork plywood',
    applications: ['Fair-Faced Concrete', 'Slab Casting', 'Bridge & Wall Formwork'],
    featured: true,
  },
  {
    id: 'yellow-board',
    name: 'Yellow Board – Different Sizes',
    category: 'boards-materials',
    categoryLabel: 'Boards & Shuttering',
    shortDescription: 'Three-ply yellow-coated shuttering plywood panel designed for slab casting and concrete wall formwork systems.',
    variantsOrSizes: ['Different Thicknesses & Sizes', 'Yellow Protective Melamine Resin Coating'],
    imageUrl: yellowBoardImg,
    altText: 'Yellow Board 3-ply formwork shuttering panel',
    applications: ['Slab Formwork', 'Concrete Shuttering', 'Floor Decking'],
    featured: true,
  },

  // 25: Spring Rapid Clamp
  {
    id: 'spring-rapid-clamp',
    name: 'Spring Rapid Clamp',
    category: 'clamps-connectors',
    categoryLabel: 'Clamps & Couplers',
    shortDescription: 'A quick fastening clamp used in scaffolding and construction applications to secure and connect components efficiently.',
    variantsOrSizes: ['Quick Fastening Mechanism', 'High-Tension Spring Steel'],
    imageUrl: springRapidClampImg,
    altText: 'Spring Rapid Clamp for scaffolding and construction applications',
    applications: ['Formwork Clamping', 'Scaffolding Connections', 'Rapid Fastening'],
    featured: true,
  },

  // 26: Adjustable Scaffolding Steel Props
  {
    id: 'adjustable-scaffolding-steel-props',
    name: 'Adjustable Scaffolding Steel Props',
    category: 'scaffolding-support',
    categoryLabel: 'Scaffolding & Support',
    shortDescription: 'Adjustable steel support props used to provide temporary vertical support in construction and scaffolding applications. Available in 3.5m, 4m, 4.5m and 5m sizes.',
    variantsOrSizes: ['3.5m', '4m', '4.5m', '5m'],
    imageUrl: adjustableSteelPropsImg,
    altText: 'Adjustable Scaffolding Steel Props available in 3.5m, 4m, 4.5m and 5m sizes',
    applications: ['Slab Shoring', 'Temporary Vertical Support', 'Scaffolding Falsework'],
    featured: true,
  },

  // 27: Scaffolding Pipes and Tie Rod
  {
    id: 'scaffolding-pipes-and-tie-rod',
    name: 'Scaffolding Pipes and Tie Rod',
    category: 'steel-pipes',
    categoryLabel: 'Steel Pipes & Tubes',
    shortDescription: 'Construction and scaffolding components used for creating support structures, bracing, fastening and formwork applications.',
    variantsOrSizes: ['Scaffolding Pipes', 'Threaded Tie Rods', 'Multiple Diameters & Lengths'],
    imageUrl: scaffoldingPipesTieRodImg,
    altText: 'Scaffolding Pipes and Tie Rod construction and formwork components',
    applications: ['Support Structures', 'Structural Bracing', 'Formwork Clamping'],
    featured: true,
  },
];
