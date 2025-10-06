"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/auth-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Package, Heart, Settings } from "lucide-react"

export function AccountContent() {
  const router = useRouter()
  const { user, isAuthenticated, logout } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">My Account</h1>
              <p className="text-lg text-muted-foreground">Welcome back, {user.name}</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto">
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Wishlist</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-muted-foreground">Account Type</p>
                      <p className="font-medium capitalize">{user.role}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="font-medium">January 2025</p>
                    </div>
                  </div>
                  <Button className="w-fit">Edit Profile</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-4 py-12 text-center">
                    <Package className="h-12 w-12 text-muted-foreground" />
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">No orders yet</p>
                      <p className="text-sm text-muted-foreground">Start shopping to see your orders here</p>
                    </div>
                    <Button onClick={() => router.push("/shop")}>Browse Products</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Wishlist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-4 py-12 text-center">
                    <Heart className="h-12 w-12 text-muted-foreground" />
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">Your wishlist is empty</p>
                      <p className="text-sm text-muted-foreground">Save your favorite items for later</p>
                    </div>
                    <Button onClick={() => router.push("/shop")}>Browse Products</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium">Password</h3>
                    <Button variant="outline" className="w-fit bg-transparent">
                      Change Password
                    </Button>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium">Email Preferences</h3>
                    <div className="flex flex-col gap-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Receive promotional emails</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Order updates and shipping notifications</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">New product announcements</span>
                      </label>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-destructive">Danger Zone</h3>
                    <Button variant="destructive" className="w-fit">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
