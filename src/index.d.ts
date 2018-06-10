declare namespace StyledSystem {
  /**
   * Core
   */
  export interface BaseTheme {
    breakpoints?: number[];
    space?: number[];
    fontSizes?: number[];
    colors?: {
      [name: string]: string;
    };
  }

  type ResponsiveValue<T> = T | (T | null)[];

  /**
   * Space
   */
  export type SpaceValue = number | string;
  export type ResponsiveSpaceValue = ResponsiveValue<SpaceValue>;

  export interface SpaceProps {
    m?: ResponsiveSpaceValue;
    mt?: ResponsiveSpaceValue;
    mr?: ResponsiveSpaceValue;
    mb?: ResponsiveSpaceValue;
    ml?: ResponsiveSpaceValue;
    mx?: ResponsiveSpaceValue;
    my?: ResponsiveSpaceValue;
    p?: ResponsiveSpaceValue;
    pt?: ResponsiveSpaceValue;
    pr?: ResponsiveSpaceValue;
    pb?: ResponsiveSpaceValue;
    pl?: ResponsiveSpaceValue;
    px?: ResponsiveSpaceValue;
    py?: ResponsiveSpaceValue;
  }
  export function space(...args: any[]): any;

  /**
   * Size
   */
  export interface WidthProps {
    width?: ResponsiveSpaceValue;
  }
  export interface MinWidthProps {
    minWidth?: ResponsiveSpaceValue;
  }
  export interface MaxWidthProps {
    maxWidth?: ResponsiveSpaceValue;
  }
  export function width(...args: any[]): any;
  export function minWidth(...args: any[]): any;
  export function maxWidth(...args: any[]): any;

  export interface HeightProps {
    height?: ResponsiveSpaceValue;
  }
  export interface MinHeightProps {
    minHeight?: ResponsiveSpaceValue;
  }
  export interface MaxHeightProps {
    maxHeight?: ResponsiveSpaceValue;
  }
  export function height(...args: any[]): any;
  export function minHeight(...args: any[]): any;
  export function maxHeight(...args: any[]): any;

  /**
   * Color
   */
  export type ColorValue = string;
  export type ResponsiveColorValue = ResponsiveValue<ColorValue>;

  export interface TextColorProps {
    color?: ResponsiveColorValue;
  }
  export interface BgColorProps {
    bg?: ResponsiveColorValue;
  }
  export type ColorProps = BgColorProps & TextColorProps;

  export function textColor(...args: any[]): any;
  export function bgColor(...args: any[]): any;
  export function color(...args: any[]): any;

  /**
   * Typography
   */
  export interface FontFamilyProps {
    fontFamily?: string;
  }
  export function fontFamily(...args: any[]): any;

  export type FontSizeValue = number | string;
  export type ResponsiveFontSizeValue = ResponsiveValue<FontSizeValue>;

  export interface FontSizeProps {
    fontSize?: ResponsiveFontSizeValue;
  }
  export function fontSize(...args: any[]): any;

  export type TextAlignValue =
    "left"
    | "right"
    | "center"
    | "justify"
    | "justify-all"
    | "start"
    | "end"
    | "match-parent";
  export type ResponsiveTextAlignValue = ResponsiveValue<TextAlignValue>;
  export interface TextAlignProps {
    align?: ResponsiveTextAlignValue;
  }
  export function textAlign(...args: any[]): any;
   
  export type ResponsiveLineHeightValue = ResponsiveValue<number | string>;
  export interface LineHeightProps {
    lineHeight?: ResponsiveLineHeightValue;
  }
  export function lineHeight(...args: any[]): any;

  export type FontWeightValue =
    "normal"
    | "bold"
    | "lighter"
    | "bolder"
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  export interface FontWeightProps {
    fontWeight?: FontWeightValue;
  }
  export function fontWeight(...args: any[]): any;

  export type ResponsiveLetterSpacingValue = ResponsiveValue<number | string>;
  export interface LetterSpacingProps {
    letterSpacing?: ResponsiveLetterSpacingValue;
  }
  export function letterSpacing(...args: any[]): any;

  /**
   * Display
   */
  export type DisplayValue = 
    "none" 
    | "hidden" 
    | "block" 
    | "inline-block"
    | "flex"
    | "inline-flex"
    | "grid";
  export type ResponsiveDisplayValue = ResponsiveValue<DisplayValue>;
  export interface DisplayProps {
    display?: ResponsiveDisplayValue;
  }
  export function display(...args: any[]): any;
  
  /**
   * Flex
   */
  export type AlignItemsValue =
    "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center";
  export type ResponsiveAlignItemsValue = ResponsiveValue<AlignItemsValue>;
  export interface AlignItemsProps {
    align?: ResponsiveAlignItemsValue;
  }
  export function alignItems(...args: any[]): any;

  export type JustifyContentValue =
    "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe center"
    | "unsafe center";
  export type ResponsiveJustifyContentValue = ResponsiveValue<JustifyContentValue>;
  export interface JustifyContentProps {
    justify?: ResponsiveJustifyContentValue;
  }
  export function justifyContent(...args: any[]): any;

  export interface FlexWrapProps {
    wrap?: boolean;
  }
  export function flexWrap(...args: any[]): any;

  export type FlexDirectionValue =
    "row"
    | "row-reverse"
    | "column"
    | "column-reverse";
  export type ResponsiveFlexDirectionValue = ResponsiveValue<FlexDirectionValue>;
  export interface FlexDirectionProps {
    flexDirection?: ResponsiveFlexDirectionValue;
  }
  export function flexDirection(...args: any[]): any;

  export type FlexValue = string;
  export type ResponsiveFlexValue = ResponsiveValue<FlexValue>;
  export interface FlexProps {
    flex?: ResponsiveFlexValue;
  }
  export function flex(...args: any[]): any;

  export type AlignSelfValue =
    "auto"
    | "normal"
    | "center"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "safe center"
    | "unsafe center";
  export type ResponsiveAlignSelfValue = ResponsiveValue<AlignSelfValue>;
  export interface AlignSelfProps {
    alignSelf?: ResponsiveAlignSelfValue;
  }
  export function alignSelf(...args: any[]): any;

  /**
   * CSS Grid
   */
  export interface GridGapProps {
    gridGap?: ResponsiveSpaceValue;
  }
  export function gridGap(...args: any[]): any;

  export interface GridRowGapProps {
    gridRowGap?: ResponsiveSpaceValue;
  }
  export function gridRowGap(...args: any[]): any;

  export interface GridColumnGapProps {
    gridColumnGap?: ResponsiveSpaceValue;
  }
  export function gridColumnGap(...args: any[]): any;

  export interface GridRowProps {
    gridRow?: number | string;
  }
  export function gridRow(...args: any[]): any;

  export interface GridColumnProps {
    gridColumn?: number | string;
  }
  export function gridColumn(...args: any[]): any;

  export type GridAutoFlowValue =
    "row"
    | "column"
    | "dense"
    | "row dense"
    | "column dense"
    | "inherit"
    | "initial"
    | "unset";
  export interface GridAutoFlowProps {
    gridAutoFlow?: GridAutoFlowValue;
  }
  export function gridAutoFlow(...args: any[]): any;

  export interface GridAutoRowsProps {
    gridAutoRows?: string;
  }
  export function gridAutoRows(...args: any[]): any;

  export interface GridAutoColumnsProps {
    gridAutoColumns?: string;
  }
  export function gridAutoColumns(...args: any[]): any;

  export interface GridTemplateRowsProps {
    gridTemplateRows?: string;
  }
  export function gridTemplateRows(...args: any[]): any;

  export interface GridTemplateColumnsProps {
    gridTemplateColumns?: string;
  }
  export function gridTemplateColumns(...args: any[]): any;

  /**
   * Borders
   */
  export interface BorderRadiusProps {
    borderRadius?: number;
  }
  export function borderRadius(...args: any[]): any;

  export interface BorderColorProps {
    borderColor?: string;
  }
  export function borderColor(...args: any[]): any;

  export type ResponsiveBordersValue = ResponsiveValue<string>;
  export interface BordersProps {
    border?: ResponsiveBordersValue;
    borderTop?: ResponsiveBordersValue;
    borderRight?: ResponsiveBordersValue;
    borderBottom?: ResponsiveBordersValue;
    borderLeft?: ResponsiveBordersValue;
  }
  export function borders(...args: any[]): any;

  /**
   * Box Shadow
   */
  export interface BoxShadowProps {
    boxShadow?: string;
  }
  export function boxShadow(...args: any[]): any;

  /**
   * Positioning
   */
  export type PositionValue = 
    "static"
    | "relative"
    | "absolute"
    | "fixed"
    | "sticky";
  export interface PositionProps {
    position?: ResponsiveValue<PositionValue>;
  }
  export function position(...args: any[]): any;

  export interface ZIndexProps {
    zIndex?: number;
  }
  export function zIndex(...args: any[]): any;

  export type ResponsivePositioningValue = ResponsiveValue<number>;
  export interface TopProps {
    top?: ResponsivePositioningValue;
  }
  export function top(...args: any[]): any;

  export interface RightProps {
    right?: ResponsivePositioningValue;
  }
  export function right(...args: any[]): any;

  export interface BottomProps {
    bottom?: ResponsivePositioningValue;
  }
  export function bottom(...args: any[]): any;

  export interface LeftProps {
    left?: ResponsivePositioningValue;
  }
  export function left(...args: any[]): any;

  /**
   * Pseudo styles
   */
  export interface HoverProps {
    hover?: any;
  }
  export function hover(...args: any[]): any;

  export interface FocusProps {
    focus?: any;
  }
  export function focus(...args: any[]): any;

  export interface ActiveProps {
    active?: any;
  }
  export function active(...args: any[]): any;

  export interface DisabledProps {
    disabledStyle?: any;
  }
  export function disabled(...args: any[]): any;

  /**
   * Complex styles
   */
  export interface TextStyleProps {
    textStyle?: string;
  }
  export function textStyle(...args: any[]): any;

  export interface ColorStyleProps {
    colorStyle?: string;
  }
  export function textStyle(...args: any[]): any;

  export interface ButtonStyleProps {
    buttonStyle?: string;
  }
  export function textStyle(...args: any[]): any;

  /**
   * Utilities
   */
  export function theme(keys: string): any;
  export function cleanElement(component: any): any;
  export function removeProps(props: any): any;

  /**
   * Low level style functions
   */
  export interface LowLevelStyleFunctionArguments {
    prop: string;
    cssProperty: string;
    key?: string;
    numberToPx?: boolean;
  }

  export function style(args: LowLevelStyleFunctionArguments): any;
  export function responsiveStyle(args: LowLevelStyleFunctionArguments): any;
  export function pseudoStyle(args: LowLevelStyleFunctionArguments): any;
}

declare module "styled-system" {
  export = StyledSystem;
}