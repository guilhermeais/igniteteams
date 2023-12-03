import { AppRoutesList } from 'src/routes/app.routes'

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutesList {}
  }
}
