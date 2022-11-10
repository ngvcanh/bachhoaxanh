export interface FormatPriceOptions{
  unit?: string;
  /**
   * @default: 'last'
   */
  unitPosition?: 'first' | 'last';
  /**
   * @default: true
   */
  comma?: boolean;
  /**
   * @default: 2
   */
  decimal?: number;
}

export default function formatPrice(price: number, options: FormatPriceOptions = {}){
  const {
    comma = true,
    decimal = 2,
    unitPosition = 'last',
    unit = ''
  } = options;

  let result = price.toFixed(decimal >= 0 ? decimal : 2);
  result = new Intl.NumberFormat(comma ? 'de-DE': 'en-EN').format(+price);
  result = `${ unitPosition === 'first' ? unit + ' ' : '' }${ result }${ unitPosition === 'last' ? ' ' + unit : '' }`;

  return result.trim();
}