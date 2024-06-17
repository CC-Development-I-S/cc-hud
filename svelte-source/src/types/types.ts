import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export const iconNames = ["voice", "health", "armor", "hunger", "thirst", "stress",
  "oxygen", "armed", "parachute", "engine", "harness", "cruise", "nitro", "dev"] as const;
export type iconNamesKind = typeof iconNames[number];

export const dynamicOptionIconNames = ["armor", "engine", "health", "hunger", "nitro", "oxygen", "stress", "thirst"] as const;
export type dynamicIconNamesKind = typeof dynamicOptionIconNames[number];

export type playerHudIcons = {
  [key in iconNamesKind]: optionalHudIconType;
}

export type dynamicIcons = {
  [key in dynamicIconNamesKind]: boolean;
}

export const iconLayouts = ["standard", "bottom-right-row", "center-bottom-row",
"left-bottom-column", "right-bottom-column", "top-left-row", "top-right-row" ] as const;
export type layoutIconKind = typeof iconLayouts[number];

export const layoutPresets = ["esx-hud-hard-to-let-go"]
export type layoutPresetKind = typeof layoutPresets[number];

export const shapes = [
  "split-circle",
  "inner-circle",
  "rotated-square",
  "regular-square",
  "circle-fill",
  "square-fill",
  "rotated-square-fill",
  "badge",
  "transparent",
] as const;
export type shapekind = typeof shapes[number];

export interface baseIconInfo {
  isShowing: boolean;
  name: string;
  shape: shapekind;
}

export interface baseIconProps extends baseIconInfo {
  height: number;
  icon: IconDefinition;
  iconScaling: number;
  iconTranslateX: number;
  iconTranslateY: number;
  progressValue: number;
  rotateDegree: number;
  translateX: number;
  translateY: number;
  width: number;
  iconRotateDegree: number;
}

export interface ringIconProps {
  displayOutline: boolean;
  iconRotateDegree: number;
  ringSize: number;
  borderGap: number;
}

export interface fillIconProps {
  borderSize: number;
}

export interface roundEndIconProps {
  xAxisRound: number;
  yAxisRound: number;
  barHeight: number;
}

export interface notchedIconProps {
  dashes: number;
  gap: number;
  borderGap: number;
}

export interface textIcon {
  conditionalText: (val: number) => string,
}

export class baseIcon implements baseIconProps {
  height = 50;
  icon = null;
  iconScaling = 0.40;
  iconTranslateX = 0;
  iconTranslateY = 0;
  isShowing = true;
  name = "";
  progressValue = 100;
  shape: shapekind = "split-circle";
  rotateDegree = 0;
  translateX = 0;
  translateY = 0;
  width = 50;
  iconRotateDegree = 0;

  constructor(shape: shapekind,
    { icon=null, isShowing=false, name="", progressValue=100 }={}) {

    switch (shape) {
      case "split-circle":
        break;
      case "rotated-square":
        this.rotateDegree = 45;
        this.height = 40;
        this.width = 40;
        break;
    }
    this.shape = shape;
    this.icon = icon;
    this.isShowing = isShowing;
    this.name = name;
    this.progressValue = progressValue;
  }
}

export class ringIcon extends baseIcon implements ringIconProps {
  displayOutline = true;
  iconRotateDegree = 0;
  ringSize = 2.5;
  borderGap = 0.85;

  constructor(shape: shapekind, optionalProps={}) {
    super(shape, optionalProps);
    switch (shape) {
      case "split-circle":
        this.iconScaling = 0.45;
        this.ringSize = 3.5;
        break;
      case "rotated-square":
        this.iconScaling = 0.4;
        this.ringSize = 2.5;
        this.borderGap = 0.80;
        this.iconRotateDegree = 315;
        break;
      case "regular-square":
        this.iconScaling = 0.4;
        this.ringSize = 2.5;
        this.borderGap = 0.80;
        break;
    }
  }
}

export class roundEndIcon extends baseIcon implements roundEndIconProps {
  xAxisRound = 5;
  yAxisRound = 20;
  barHeight = 4;

  constructor(shape: shapekind, optionalProps={}) {
    super(shape, optionalProps);
    switch (shape) {
      case "badge":
        this.height = 55;
        this.width = 45;
        this.iconScaling = 0.38;
        this.xAxisRound = 0;
        this.yAxisRound = 0;
        this.barHeight = 4;
        break;
      case "transparent":
        this.height = 55;
        this.width = 45;
        this.iconScaling = 0.38;
        this.xAxisRound = 0;
        this.yAxisRound = 0;
        this.barHeight = 5;
        break;
    }
  }
}

export class notchedIcon extends ringIcon implements notchedIconProps {
  dashes = 8;
  gap = 4;
  borderGap = 0.80;

  constructor(shape: shapekind, optionalProps={}) {
    super(shape, optionalProps);
    switch (shape) {
      case "split-circle":
        this.dashes = 8;
        this.gap = 2.5;
        this.borderGap = 0.90;
        break;
    }
  }
}

export class fillIcon extends baseIcon implements fillIconProps {
  borderSize = 4;

  constructor(shape: shapekind, optionalprops={}) {
    super(shape, optionalprops);
    switch (shape) {
      case "circle-fill":
        this.borderSize = 3;
        break;
      case "rotated-square-fill":
        // this.rotateDegree = 45;
        this.height = 50;
        this.width = 50;
        this.borderSize = 3.5;
        this.iconScaling = 0.3;
        // this.iconRotateDegree = 315;
        break;
    }
  }
}

export function createShapeIcon(shape: shapekind, optionalProps={}): optionalHudIconType {
  switch (shape) {
    case "inner-circle":
    case "rotated-square":
    case "regular-square":
      return new ringIcon(shape, optionalProps);
    case "split-circle":
      return new notchedIcon(shape, optionalProps);
    case "circle-fill":
    case "square-fill":
    case "rotated-square-fill":
      return new fillIcon(shape, optionalProps);
    case "badge":
    case "transparent":
      return new roundEndIcon(shape, optionalProps);
    default:
      return new baseIcon(shape, optionalProps);
  }
}

export interface shapeIcons {
  "horizontal-bar": textIcon,
  "icon-percentage": baseIconProps,
}

export type optionalHudIconType = Partial<baseIconProps & ringIconProps & roundEndIcon & notchedIconProps & fillIconProps>;
export type optionalHudIconMetaShapeType = optionalHudIconType & Partial<colorNameObj>;

export type optionalPlayerHudIconsType = Partial<{ [Property in keyof playerHudIcons]: optionalHudIconType }>;

const DEFAULTICONSHAPE: shapekind = "split-circle";

export function defaultHudIcon(name: string = "", showing: boolean = false, icon: object = null): any {
  return createShapeIcon(DEFAULTICONSHAPE, { isShowing: showing, icon: icon, name: name });
}

export type shapePropsType = Omit<optionalHudIconType, "shape" | "isShowing" | "name" >;

export const colorNames = ["iconColor", "iconDropShadowAmount", "iconContrast", "innerColor", "outlineColor", "outlineContrast", "outlineDropShadowAmount",
  "progressColor", "progressDropShadowAmount", "progressContrast"] as const;
export type colorNamesKind = typeof colorNames[number];

interface colorNameObj {
  iconColor: string,
  iconDropShadowAmount: number,
  iconContrast: number,
  innerColor: string,
  outlineColor: string,
  outlineContrast: number,
  outlineDropShadowAmount: number,
  progressColor: string,
  progressContrast: number,
  progressDropShadowAmount: number,
}

export type globalEditableColorsType = colorNameObj
  & { editableColors: {[key: string]: boolean}}
  & { editSingleIconName: iconNamesKind, editSingleIconStage: number};

export type editableColorsType = {
  [key in colorNamesKind]: boolean
}

export interface colorEffect extends colorNameObj {
  name: string
}

export type iconColorEffect = {
  currentEffect: number,
  colorEffects: Array<colorEffect>,
  editableColors: {[key: string]: boolean}
}

export type playerHudColorEffects = {
  [key in iconNamesKind]: iconColorEffect;
}

const percentToHex = (percentage: number): string => {
  const normalizedPercent: number = Math.max(0, Math.min(100, percentage));
  const intValue: number = Math.round(normalizedPercent / 100 * 255);
  const hexValue: string = intValue.toString(16);
  return hexValue.padStart(2, '0').toUpperCase();
}

export function defaultColorEffect(name: string, progressColor: string, outlineColor: string = "",
  iconColor: string = "#FFFFFFFF", innerColor: string = "#212121FF"): colorEffect {

  return {
    iconColor: iconColor,
    iconContrast: 100,
    iconDropShadowAmount: 0,
    innerColor: innerColor,
    name: name,
    outlineColor: outlineColor || progressColor+percentToHex(40),
    outlineContrast: 100,
    outlineDropShadowAmount: 0,
    progressColor: progressColor,
    progressContrast: 100,
    progressDropShadowAmount: 0,
  }
}

export function defaultEditableColor() {
  return createEditableColor(DEFAULTICONSHAPE);
}

export function createEditableColor(shape: shapekind): Partial<editableColorsType> {
  let editOptions: Partial<editableColorsType> = {};
  switch (shape) {
    case "split-circle":
    case "inner-circle":
    // case "diamond-ring":
    // case "hexagon-ring":
    // case "pill-ring":
    // case "square-ring":
    // case "square-whole":
    // case "star-ring":
    // case "triangle-ring":
      editOptions.innerColor = true;
      break;
  }
  return editOptions;
}

export const menuStoreLocalStorageName: string = "PSHudMenu";
export const playerStoreLocalStorageName: string = "PSHudPlayerStatus";
export const layoutStoreLocalStorageName: string = "PSHudLayout";
export const colorStoreLocalStorageName: string = "PSHudColor";
export const profileLocalStorageName: string = "PSHudProfile";

export function capAmountToHundred(num: number) {
  return Math.min(num, 100);
}