import Vue from 'vue'

/** ElementUI component common definition */
export declare class DlsugarUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type DlsugarUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type DlsugarUIHorizontalAlignment = 'left' | 'center' | 'right'
