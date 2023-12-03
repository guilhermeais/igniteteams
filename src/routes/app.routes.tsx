import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Groups } from '@screens/Groups'
import { NewGroup } from '@screens/NewGroup'
import { Players } from '@screens/Players'

const { Navigator, Screen } = createNativeStackNavigator()

export type AppRoutesList = {
  Groups: React.ComponentProps<typeof Groups> & {}
  NewGroup: React.ComponentProps<typeof NewGroup>
  Players: React.ComponentProps<typeof Players>
}

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={Groups.name} component={Groups} />
      <Screen name={NewGroup.name} component={NewGroup} />
      <Screen name={Players.name} component={Players} />
    </Navigator>
  )
}
