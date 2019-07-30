Primary

```jsx
<div className="buttonGrid">
  <div className="buttonCell">
    <Button disableRipple size="large" color="primary">
      Create Story
    </Button>
  </div>
  <div className="buttonCell">
    <Button disableRipple disabled size="large" color="primary">
      Create Story
    </Button>
  </div>
</div>
```
Secondary
```jsx
<div className="buttonGrid">
  <div className="buttonCell">
    <Button disableRipple size="medium" variant="raised" color="secondary">
      Secondary
    </Button>
  </div>
  <div className="buttonCell">
    <Button disableRipple size="medium" destructive variant="raised" color="secondary">
      Secondary Hover (Destructive)
    </Button>
  </div>
  <div className="buttonCell">
    <Button disableRipple disabled size="medium" variant="raised" color="secondary">
      Secondary Disabled
    </Button>
  </div>
  <div className="buttonCell">
    <Button disableRipple size="medium" active variant="raised" color="secondary">
      Secondary Active
    </Button>
  </div>
</div>
```
Icon Buttons
```jsx
<div className="buttonGrid">
  <div className="buttonCell">
    <IconButtonPrimary disableRipple iconLeft size="large" color="primary" />
  </div>
  <div className="buttonCell">
    <IconButtonPrimary disableRipple iconLeft size="large" label="New Story" color="primary" />
  </div>
  <div className="buttonCell">
    <IconButton disableRipple variant="raised" iconRight label="Filters" color="secondary" />
  </div>
  <div className="buttonCell">
    <MoveToStoryButton disableRipple variant="raised" iconRight color="secondary" />
  </div>
</div>
  
```
