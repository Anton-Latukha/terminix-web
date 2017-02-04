---
title: Quake
id: quake
layout: default
lang: en
---
### Introduction

Terminix supports running in a _Quake_-style mode where it appears at the top of the screen and can be toggled on or off as needed. However, unlike other terminal emulators that support this mode Terminix does not register a global hot key. Instead you must register a hot key yourself with the Desktop Environment you are using, this is required because Wayland does not support global hot keys.

When you register the hot key, simply bind it to the following command:

{% highlight bash %}
terminix --quake
{% endhighlight %}

When Terminix is run with the `--quake` switch, it will check if a quake style window is already running and if so simply toggle the window's visibility. If no quake style window has been created, then Terminix will create one and display it.

Configuring this hot key for GNOME is quite simple, simply open the Keyboard settings and configure a hot key as per the example in the screenshot below:

![]({{site.baseurl}}/assets/images/manual/hotkey.png)

### Wayland

There is a limitation with Wayland: the setting to use a monitor other than the primary monitor is disabled. This is because Wayland does not support moving a window programmatically between monitors.
