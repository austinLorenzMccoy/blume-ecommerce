"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "lace-front", label: "Lace Front Wigs" },
  { id: "full-lace", label: "Full Lace Wigs" },
  { id: "bundles", label: "Hair Bundles" },
  { id: "closures", label: "Closures & Frontals" },
  { id: "bob-wigs", label: "Bob Wigs" },
]

const textures = [
  { id: "straight", label: "Straight" },
  { id: "wavy", label: "Wavy" },
  { id: "curly", label: "Curly" },
  { id: "deep-wave", label: "Deep Wave" },
  { id: "body-wave", label: "Body Wave" },
]

const lengths = [
  { id: "short", label: "Short (8-12 inches)" },
  { id: "medium", label: "Medium (14-18 inches)" },
  { id: "long", label: "Long (20-24 inches)" },
  { id: "extra-long", label: "Extra Long (26+ inches)" },
]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])

  return (
    <div className="flex flex-col gap-8 p-6 border border-border rounded-lg bg-card">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <Button variant="ghost" size="sm" className="w-fit">
          Clear All
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-medium">Category</h4>
        <div className="flex flex-col gap-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox id={category.id} />
              <Label htmlFor={category.id} className="text-sm font-normal cursor-pointer">
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-medium">Texture</h4>
        <div className="flex flex-col gap-3">
          {textures.map((texture) => (
            <div key={texture.id} className="flex items-center gap-2">
              <Checkbox id={texture.id} />
              <Label htmlFor={texture.id} className="text-sm font-normal cursor-pointer">
                {texture.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-medium">Length</h4>
        <div className="flex flex-col gap-3">
          {lengths.map((length) => (
            <div key={length.id} className="flex items-center gap-2">
              <Checkbox id={length.id} />
              <Label htmlFor={length.id} className="text-sm font-normal cursor-pointer">
                {length.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-medium">Price Range</h4>
        <div className="flex flex-col gap-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="w-full" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
