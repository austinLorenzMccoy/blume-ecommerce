"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/auth-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Users, ShoppingCart, TrendingUp, Plus, LogOut } from "lucide-react"
import Link from "next/link"

export function AdminContent() {
  const router = useRouter()
  const { user, isAuthenticated, logout } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated || user?.role !== "admin") {
      router.push("/")
    }
  }, [isAuthenticated, user, router])

  if (!isAuthenticated || user?.role !== "admin") {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight">TefanyHair Admin</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/">View Store</Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Sign Out</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Dashboard Header */}
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-4xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your store and view analytics</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦18,517,500</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">234</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48</div>
                <p className="text-xs text-muted-foreground">4 added this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+8.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Management Tabs */}
          <Tabs defaultValue="products" className="w-full">
            <TabsList>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Products</CardTitle>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Product
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {/* Product List */}
                    <div className="rounded-lg border">
                      <div className="grid grid-cols-[1fr,auto,auto,auto] gap-4 p-4 font-medium text-sm border-b bg-muted/50">
                        <div>Product</div>
                        <div className="text-right">Price</div>
                        <div className="text-right">Stock</div>
                        <div className="text-right">Actions</div>
                      </div>
                      {[
                        { name: "Silky Straight Lace Front", price: 450000, stock: 45 },
                        { name: "Natural Wave Bundle", price: 375000, stock: 28 },
                        { name: "Curly Bob Wig", price: 420000, stock: 62 },
                        { name: "Deep Wave Closure", price: 285000, stock: 15 },
                      ].map((product, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[1fr,auto,auto,auto] gap-4 p-4 items-center border-b last:border-0"
                        >
                          <div className="font-medium">{product.name}</div>
                          <div className="text-right">₦{product.price.toLocaleString()}</div>
                          <div className="text-right">{product.stock}</div>
                          <div className="flex gap-2 justify-end">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border">
                    <div className="grid grid-cols-[auto,1fr,auto,auto,auto] gap-4 p-4 font-medium text-sm border-b bg-muted/50">
                      <div>Order ID</div>
                      <div>Customer</div>
                      <div>Total</div>
                      <div>Status</div>
                      <div className="text-right">Actions</div>
                    </div>
                    {[
                      { id: "#1234", customer: "Jane Smith", total: 217500, status: "Completed" },
                      { id: "#1233", customer: "John Doe", total: 133500, status: "Processing" },
                      { id: "#1232", customer: "Sarah Johnson", total: 351000, status: "Shipped" },
                      { id: "#1231", customer: "Mike Wilson", total: 100500, status: "Pending" },
                    ].map((order, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[auto,1fr,auto,auto,auto] gap-4 p-4 items-center border-b last:border-0"
                      >
                        <div className="font-mono text-sm">{order.id}</div>
                        <div>{order.customer}</div>
                        <div>₦{order.total.toLocaleString()}</div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              order.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Processing"
                                  ? "bg-blue-100 text-blue-800"
                                  : order.status === "Shipped"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border">
                    <div className="grid grid-cols-[1fr,auto,auto,auto] gap-4 p-4 font-medium text-sm border-b bg-muted/50">
                      <div>Customer</div>
                      <div className="text-right">Orders</div>
                      <div className="text-right">Total Spent</div>
                      <div className="text-right">Actions</div>
                    </div>
                    {[
                      { name: "Jane Smith", email: "jane@example.com", orders: 12, spent: 1867500 },
                      { name: "John Doe", email: "john@example.com", orders: 8, spent: 1335000 },
                      { name: "Sarah Johnson", email: "sarah@example.com", orders: 15, spent: 3510000 },
                      { name: "Mike Wilson", email: "mike@example.com", orders: 5, spent: 850500 },
                    ].map((customer, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[1fr,auto,auto,auto] gap-4 p-4 items-center border-b last:border-0"
                      >
                        <div className="flex flex-col gap-1">
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-sm text-muted-foreground">{customer.email}</div>
                        </div>
                        <div className="text-right">{customer.orders}</div>
                        <div className="text-right">₦{customer.spent.toLocaleString()}</div>
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
