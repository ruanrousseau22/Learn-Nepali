# -*- coding: utf-8 -*-
"""Single source of truth for the Bhasaly mark: three lines of text, in three
brand colours, with word-gaps and varying lengths.

The gaps + colours + uneven lengths are deliberate: the app header also holds a
mono ☰ menu button, and three even solid bars would read as a second one."""

SW = 6.4                       # stroke width; round caps
ROWS = [                       # (y, [(x1,x2), ...])
    (18, [(12, 34), (43, 52)]),
    (32, [(12, 23), (32, 52)]),
    (46, [(12, 29), (38, 52)]),
]
LIGHT = ['#C2362E', '#C67911', '#0F8C74']          # on a light surface
BRIGHT = ['#E8836A', '#E7AD5E', '#5FC6B0']         # on the dark icon tile
VARS  = ['var(--crimson)', 'var(--saffron)', 'var(--teal)']
INK   = '#1B2430'

def _d(segs):
    return ''.join('M%g %gH%g' % (x1, y, x2) for (x1, x2), y in segs)

def bars(colours, indent=''):
    out = []
    for (y, segs), c in zip(ROWS, colours):
        d = ''.join('M%g %gH%g' % (x1, y, x2) for x1, x2 in segs)
        out.append('%s<path stroke="%s" d="%s"/>' % (indent, c, d))
    return '\n'.join(out)

def group(colours, indent=''):
    return ('%s<g fill="none" stroke-width="%s" stroke-linecap="round">\n%s\n%s</g>'
            % (indent, SW, bars(colours, indent + '  '), indent))

def svg_tile(rx=14, scale=1.0):
    inner = group(BRIGHT, '  ')
    if scale != 1.0:
        inner = ('  <g transform="translate(32,32) scale(%s) translate(-32,-32)">\n  %s\n  </g>'
                 % (scale, group(BRIGHT, '    ').strip()))
    r = '<rect width="64" height="64" rx="%d" fill="%s"/>' % (rx, INK) if rx else \
        '<rect width="64" height="64" fill="%s"/>' % INK
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  %s\n%s\n</svg>\n' % (r, inner)

def svg_mask():
    """Safari pinned tab: must be a flat monochrome silhouette, so rects not strokes."""
    rects = []
    for y, segs in ROWS:
        for x1, x2 in segs:
            rects.append('  <rect x="%g" y="%g" width="%g" height="%g" rx="%g"/>'
                         % (x1 - SW/2, y - SW/2, (x2 - x1) + SW, SW, SW/2))
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n%s\n</svg>\n'
            % '\n'.join(rects))

INLINE_VARS  = group(VARS).replace('\n', '').replace('  ', '')
INLINE_LIGHT = group(LIGHT).replace('\n', '').replace('  ', '')
