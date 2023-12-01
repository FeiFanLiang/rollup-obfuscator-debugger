import 'pinia'
import { Router } from 'vue-router'

declare module 'pinia' {
  export declare interface PiniaCustomProperties {
    router: Router
  }
}
