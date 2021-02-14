---
id: "modifiersmatchers"
title: "Type alias: ModifiersMatchers"
sidebar_label: "ModifiersMatchers"
custom_edit_url: null
hide_title: true
---

# Type alias: ModifiersMatchers

Ƭ **ModifiersMatchers**: { [modifier in Modifier]: Matcher}

Represents the [[Matchers]] assigned to each modifier.

**Example**

```
const matchers = {
 booked: new Date(), // matches today
 selected: { from: new Date() } // matches from today
 ...
}
```