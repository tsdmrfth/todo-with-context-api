import React from 'react'
import AppProvider from './src/context/base/AppProvider'
import { DashboardScreen } from './src/ui/screens/dashboard/DashboardScreen'

export default function App() {
    return (
        <AppProvider>
            <DashboardScreen/>
        </AppProvider>
    )
}