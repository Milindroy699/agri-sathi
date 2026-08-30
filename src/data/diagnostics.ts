/* -----------------------------------------------------------------------------
 * Diagnostic tagging for the Problem Diagnosis tool.
 *
 * Agronomic content stays in src/content/crops/*.md. This file only adds the
 * symptom tags that let a farmer navigate "where on the plant + what I see" to
 * the right entry. Keep it in sync when crop pest/disease/problem lists change.
 *
 * `match` is a case-insensitive substring of the entry's English name
 * (for pests/diseases) or English symptom (for common problems).
 * -------------------------------------------------------------------------- */

export const BODY_PARTS = [
  'seedling',
  'leaf',
  'stem',
  'root',
  'flower',
  'pod_fruit',
  'grain_head',
  'whole_plant',
] as const;
export type BodyPart = (typeof BODY_PARTS)[number];

export const SIGNS = [
  'insects_visible',
  'holes_chewed',
  'boring_tunnels',
  'yellowing',
  'browning_drying',
  'spots_lesions',
  'powder_or_mould',
  'rot_soft',
  'wilting',
  'stunting',
  'curling_distortion',
  'webbing_silk',
  'discoloured_inside',
  'poor_fill_empty',
] as const;
export type Sign = (typeof SIGNS)[number];

export interface DiagEntry {
  kind: 'pest' | 'disease' | 'problem';
  match: string;
  parts: BodyPart[];
  signs: Sign[];
}

export const DIAGNOSTICS: Record<string, DiagEntry[]> = {
  rice: [
    { kind: 'pest', match: 'yellow stem borer', parts: ['stem', 'grain_head', 'whole_plant'], signs: ['boring_tunnels', 'browning_drying', 'wilting', 'poor_fill_empty'] },
    { kind: 'pest', match: 'brown planthopper', parts: ['stem', 'whole_plant', 'leaf'], signs: ['insects_visible', 'browning_drying', 'wilting', 'powder_or_mould'] },
    { kind: 'pest', match: 'leaf folder', parts: ['leaf'], signs: ['insects_visible', 'browning_drying', 'curling_distortion'] },
    { kind: 'disease', match: 'blast', parts: ['leaf', 'grain_head', 'stem'], signs: ['spots_lesions', 'browning_drying', 'poor_fill_empty'] },
    { kind: 'disease', match: 'bacterial leaf blight', parts: ['leaf'], signs: ['browning_drying', 'yellowing', 'spots_lesions'] },
    { kind: 'disease', match: 'sheath blight', parts: ['stem', 'leaf'], signs: ['spots_lesions', 'browning_drying', 'rot_soft'] },
    { kind: 'problem', match: 'rusty brown from the tip', parts: ['leaf', 'whole_plant'], signs: ['yellowing', 'browning_drying', 'stunting'] },
    { kind: 'problem', match: 'leans over flat', parts: ['whole_plant', 'stem'], signs: ['wilting'] },
    { kind: 'problem', match: 'empty or half-filled grains', parts: ['grain_head'], signs: ['poor_fill_empty'] },
  ],
  wheat: [
    { kind: 'pest', match: 'aphids', parts: ['leaf', 'grain_head'], signs: ['insects_visible', 'powder_or_mould', 'yellowing'] },
    { kind: 'pest', match: 'termites', parts: ['root', 'whole_plant', 'seedling'], signs: ['wilting', 'browning_drying'] },
    { kind: 'disease', match: 'yellow (stripe) rust', parts: ['leaf'], signs: ['powder_or_mould', 'yellowing', 'spots_lesions'] },
    { kind: 'disease', match: 'loose smut', parts: ['grain_head'], signs: ['powder_or_mould', 'discoloured_inside'] },
    { kind: 'problem', match: 'thin, weak crop', parts: ['whole_plant', 'leaf'], signs: ['stunting', 'yellowing'] },
    { kind: 'problem', match: 'flattens after irrigation', parts: ['whole_plant', 'stem'], signs: ['wilting'] },
    { kind: 'problem', match: 'shrivelled, low-weight grain', parts: ['grain_head'], signs: ['poor_fill_empty'] },
  ],
  maize: [
    { kind: 'pest', match: 'fall armyworm', parts: ['leaf', 'pod_fruit', 'whole_plant'], signs: ['holes_chewed', 'insects_visible', 'boring_tunnels'] },
    { kind: 'pest', match: 'stem borer', parts: ['stem', 'whole_plant'], signs: ['boring_tunnels', 'browning_drying', 'wilting'] },
    { kind: 'disease', match: 'turcicum leaf blight', parts: ['leaf'], signs: ['spots_lesions', 'browning_drying'] },
    { kind: 'disease', match: 'maydis leaf blight', parts: ['leaf', 'pod_fruit'], signs: ['spots_lesions', 'powder_or_mould', 'rot_soft'] },
    { kind: 'problem', match: 'broad white or pale-yellow bands', parts: ['leaf', 'seedling'], signs: ['yellowing', 'stunting'] },
    { kind: 'problem', match: 'missing or unfilled kernels', parts: ['pod_fruit', 'grain_head'], signs: ['poor_fill_empty'] },
    { kind: 'problem', match: 'snap at a node and lodge', parts: ['stem', 'whole_plant'], signs: ['wilting'] },
  ],
  cotton: [
    { kind: 'pest', match: 'pink bollworm', parts: ['flower', 'pod_fruit'], signs: ['boring_tunnels', 'holes_chewed', 'curling_distortion', 'poor_fill_empty'] },
    { kind: 'pest', match: 'whitefly', parts: ['leaf'], signs: ['insects_visible', 'powder_or_mould', 'yellowing', 'curling_distortion'] },
    { kind: 'pest', match: 'sucking pests', parts: ['leaf', 'seedling'], signs: ['insects_visible', 'curling_distortion', 'yellowing', 'browning_drying'] },
    { kind: 'disease', match: 'leaf curl virus', parts: ['leaf', 'whole_plant'], signs: ['curling_distortion', 'stunting'] },
    { kind: 'disease', match: 'boll rot', parts: ['pod_fruit', 'leaf'], signs: ['rot_soft', 'spots_lesions', 'powder_or_mould'] },
    { kind: 'problem', match: 'most flowers and small bolls drop', parts: ['flower', 'pod_fruit'], signs: ['poor_fill_empty'] },
    { kind: 'problem', match: 'Tall leafy plants', parts: ['whole_plant', 'stem'], signs: ['stunting'] },
    { kind: 'problem', match: 'turn red or reddish-brown', parts: ['leaf'], signs: ['yellowing', 'browning_drying'] },
  ],
  sugarcane: [
    { kind: 'pest', match: 'early shoot borer', parts: ['stem', 'seedling', 'whole_plant'], signs: ['boring_tunnels', 'browning_drying', 'wilting'] },
    { kind: 'pest', match: 'top borer', parts: ['stem', 'leaf', 'whole_plant'], signs: ['boring_tunnels', 'holes_chewed', 'browning_drying', 'curling_distortion'] },
    { kind: 'disease', match: 'red rot', parts: ['stem', 'whole_plant', 'leaf'], signs: ['discoloured_inside', 'wilting', 'browning_drying', 'rot_soft'] },
    { kind: 'disease', match: 'wilt', parts: ['stem', 'whole_plant'], signs: ['wilting', 'discoloured_inside', 'browning_drying'] },
    { kind: 'problem', match: 'Patchy field with many gaps', parts: ['seedling', 'whole_plant'], signs: ['stunting', 'poor_fill_empty'] },
    { kind: 'problem', match: 'lean over or lie flat', parts: ['whole_plant', 'stem'], signs: ['wilting'] },
    { kind: 'problem', match: 'Low sugar recovery', parts: ['stem'], signs: ['discoloured_inside', 'poor_fill_empty'] },
  ],
  soybean: [
    { kind: 'pest', match: 'girdle beetle', parts: ['stem', 'whole_plant'], signs: ['boring_tunnels', 'wilting', 'browning_drying'] },
    { kind: 'pest', match: 'defoliators', parts: ['leaf'], signs: ['holes_chewed', 'insects_visible'] },
    { kind: 'disease', match: 'yellow mosaic virus', parts: ['leaf', 'whole_plant'], signs: ['yellowing', 'curling_distortion', 'stunting'] },
    { kind: 'disease', match: 'rust, pod blight', parts: ['leaf', 'pod_fruit', 'stem'], signs: ['spots_lesions', 'powder_or_mould', 'browning_drying', 'rot_soft'] },
    { kind: 'problem', match: 'pale green and stunted', parts: ['whole_plant', 'leaf', 'root'], signs: ['yellowing', 'stunting'] },
    { kind: 'problem', match: 'Seedlings collapse in patches', parts: ['seedling', 'stem'], signs: ['wilting', 'rot_soft', 'browning_drying'] },
    { kind: 'problem', match: 'pods poorly filled', parts: ['pod_fruit'], signs: ['poor_fill_empty'] },
  ],
  mustard: [
    { kind: 'pest', match: 'mustard aphid', parts: ['leaf', 'flower', 'pod_fruit', 'stem'], signs: ['insects_visible', 'powder_or_mould', 'curling_distortion', 'stunting'] },
    { kind: 'pest', match: 'painted bug', parts: ['seedling', 'pod_fruit', 'leaf'], signs: ['insects_visible', 'holes_chewed', 'browning_drying'] },
    { kind: 'disease', match: 'white rust', parts: ['leaf', 'flower', 'stem'], signs: ['powder_or_mould', 'spots_lesions', 'curling_distortion'] },
    { kind: 'disease', match: 'alternaria blight', parts: ['leaf', 'pod_fruit', 'stem'], signs: ['spots_lesions', 'browning_drying', 'rot_soft', 'wilting'] },
    { kind: 'problem', match: 'few pods set', parts: ['flower', 'pod_fruit'], signs: ['poor_fill_empty'] },
    { kind: 'problem', match: 'club-shaped flower heads', parts: ['flower'], signs: ['curling_distortion', 'poor_fill_empty'] },
    { kind: 'problem', match: 'oil content both low', parts: ['pod_fruit', 'grain_head'], signs: ['poor_fill_empty'] },
  ],
  chickpea: [
    { kind: 'pest', match: 'gram pod borer', parts: ['leaf', 'pod_fruit'], signs: ['holes_chewed', 'boring_tunnels', 'insects_visible', 'poor_fill_empty'] },
    { kind: 'pest', match: 'cutworm', parts: ['seedling', 'stem'], signs: ['holes_chewed', 'browning_drying', 'wilting'] },
    { kind: 'disease', match: 'fusarium wilt', parts: ['whole_plant', 'root', 'stem'], signs: ['wilting', 'yellowing', 'browning_drying', 'discoloured_inside'] },
    { kind: 'disease', match: 'botrytis grey mould', parts: ['flower', 'pod_fruit', 'stem'], signs: ['powder_or_mould', 'rot_soft', 'spots_lesions'] },
    { kind: 'problem', match: 'wilt and die from 3', parts: ['whole_plant', 'root'], signs: ['wilting', 'yellowing', 'browning_drying'] },
    { kind: 'problem', match: 'Tall, dark green, leafy plants', parts: ['whole_plant', 'flower'], signs: ['stunting', 'poor_fill_empty'] },
    { kind: 'problem', match: 'many are empty, single-seeded, or have round holes', parts: ['pod_fruit'], signs: ['poor_fill_empty', 'holes_chewed'] },
  ],
};
