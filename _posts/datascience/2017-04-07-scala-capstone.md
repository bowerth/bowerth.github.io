---
layout   : post_mathjax
category : datascience
tagline  : 
tags     : 
---
{% include JB/setup %}

# Week 2

##  Spatial interpolation

Implementation of the following method:

~~~
def predictTemperature(temperatures: Iterable[(Location, Double)], location: Location): Double
~~~

This method takes a sequence of known temperatures at the given locations, and a location where we want to guess the temperature, and returns an estimate based on the inverse distance weighting algorithm. To approximate the distance between two locations, we suggest you to use the great-circle distance formula. 


## Inverse Distance Weighting

- [wikipedia: Inverse Distance Weighting](https://en.wikipedia.org/wiki/Inverse_distance_weighting)

A general form of finding an interpolated value $$u$$ u at a given point $$x$$ based on samples $$u_{i}=u(x_{i})$$ for $$i=1,2,...,N$$ using IDW is an interpolating function:

\\[
u(\mathrm{x})=
\begin{cases}
\frac{ \sum_{i=1}^N w_i \left( \mathrm{x} \right) u_i}{\sum_{i=1}^N w_i \left( \mathrm{x} \right) }, \textrm{ if } d(\mathrm{x}, \mathrm{x}_i) \ne 0 \textrm{ for all } i ~\\\
u_i, \quad\quad\quad \textrm{ if } d(\mathrm{x}, \mathrm{x}_i) = 0 \textrm{ for some } i
\end{cases}
\\]

where

\\[
w_{i}(\mathbf {x} )={\frac {1}{d(\mathbf {x} ,\mathbf {x} _{i})^{p}}} 
\\]

is a simple IDW weighting function, as defined by Shepard[^1], $$x$$ denotes an interpolated (arbitrary) point, $$x_i$$ is an interpolating (known) point, $$d$$ is a given distance (metric operator) from the known point $$x_i$$ to the unknown point $$x$$, $$N$$ is the total number of known points used in interpolation and $$p$$ is a positive real number, called the power parameter.

[^1]: Shepard, Donald (1968). "A two-dimensional interpolation function for irregularly-spaced data". Proceedings of the 1968 [ACM](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery) National Conference. pp. 517–524. doi:[10.1145/800186.810616](https://dx.doi.org/10.1145%2F800186.810616).


## Great Circle Distance

- [wikipedia: Great Circle Distance](https://en.wikipedia.org/wiki/Great-circle_distance)
- [Wolfram MathWorld: Great Circle](http://mathworld.wolfram.com/GreatCircle.html)

Let $$\phi _{1} , \lambda _{1}$$ and $$\phi _{2} , \lambda _{2}$$ be the geographical latitude and longitude of two points 1 and 2, and $$\Delta \phi ,\Delta \lambda$$ their absolute differences; then $$\Delta \sigma$$ , the central angle between them, is given by the spherical law of cosines:

\\[
\Delta\sigma=\arccos\bigl(\sin\phi_1\cdot\sin\phi_2+\cos\phi_1\cdot\cos\phi_2\cdot\cos(\Delta\lambda)\bigr).
\\]

The distance $$d$$, i.e. the arc length, for a sphere of radius $$r$$ and $$\Delta \sigma$$ given in radians

\\[
d=r\,\Delta \sigma . 
\\]

### Computational formulas

On computer systems with low floating-point precision, the spherical law of cosines formula can have large rounding errors if the distance is small (if the two points are a kilometer apart on the surface of the Earth, the cosine of the central angle comes out 0.99999999). For modern 64-bit floating-point numbers, the spherical law of cosines formula, given above, does not have serious rounding errors for distances larger than a few meters on the surface of the Earth.[^2] The haversine formula is numerically better-conditioned for small distances:[^3]

\\[
\Delta\sigma =2\arcsin \sqrt{\sin^2\left(\frac{\Delta\phi}{2}\right)+\cos{\phi_1}\cdot\cos{\phi_2}\cdot\sin^2\left(\frac{\Delta\lambda}{2}\right)}
\\]

Although this formula is accurate for most distances on a sphere, it too suffers from rounding errors for the special (and somewhat unusual) case of antipodal points (on opposite ends of the sphere). A more complicated formula that is accurate for all distances is the following special case of the Vincenty formula for an ellipsoid with equal major and minor axes:[^4]

\\[
\Delta\sigma=\arctan \frac{\sqrt{\left(\cos\phi_2\cdot\sin(\Delta\lambda)\right)^2+\left(\cos\phi_1\cdot\sin\phi_2-\sin\phi_1\cdot\cos\phi_2\cdot\cos(\Delta\lambda)\right)^2}}{\sin\phi_1\cdot\sin\phi_2+\cos\phi_1\cdot\cos\phi_2\cdot\cos(\Delta\lambda)}
\\]

When programming a computer, one should use the `atan2()` function rather than the ordinary arctangent function (`atan()`), so that $$\Delta \sigma$$ is placed in the correct quadrant.

A good choice[^6] for the radius is the mean earth radius, $$R_{1}={\frac 13}(2a+b)\approx 6371\,{\mathrm {km}}$$ (for the WGS84 ellipsoid); in the limit of small flattening, this choice minimizes the mean square relative error in the estimates for distance.

## atan2

- [wikipedia: atan2](https://en.wikipedia.org/wiki/Atan2)

In a variety of computer languages, the function atan2 is the arctangent function with two arguments. For any real number (e.g., floating point) arguments x and y not both equal to zero, atan2(y, x) is the angle in radians between the positive x-axis of a plane and the point given by the coordinates (x, y) on it. The angle is positive for counter-clockwise angles (upper half-plane, y > 0), and negative for clockwise angles (lower half-plane, y < 0).

The purpose of using two arguments instead of one, i.e. just computing a atan(y/x), is to gather information on the signs of the inputs in order to return the appropriate quadrant of the computed angle, which is not possible for the single-argument arctangent function. It also avoids the problem of division by zero, as atan2(y, 0) will return a valid answer as long as y is non-zero.

<img src="/assets/images/diagrams/wikipedia-atan2-argument-sign-graph.svg" width="300px">


## Linear Interpolation

- [wikipedia: Linear Interpolation](https://en.wikipedia.org/wiki/Linear_interpolation)


## Radian

- [wikipedia: Radian](https://en.wikipedia.org/wiki/Radian)

An arc of a circle with the same length as the radius of that circle subtends an angle of 1 radian. The circumference subtends an angle of 2π radians.

![wikipedia-300px-circle-radians](/assets/images/diagrams/wikipedia-300px-circle-radians.gif)


# Week 3

## Web Mercator

While the Web Mercator's formulas are for the spherical form of the Mercator, geographical coordinates are required to be in the [WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System#A_new_World_Geodetic_System:_WGS_84) ellipsoidal datum.

### Formulas

Formulas for the Web Mercator are fundamentally the same as for the standard spherical Mercator, but before applying zoom, the "world coordinates" are adjusted such that the upper left corner is (0, 0) and the lower right corner is (256, 256):[5]

\\[
{\begin{aligned}
x&={\frac {128}{\pi }}2^{\text{zoom level}}(\lambda +\pi ){\text{ pixels}} ~\\\
y&={\frac {128}{\pi }}2^{\text{zoom level}}\left(\pi -\ln \left[\tan \left({\frac {\pi }{4}}+{\frac {\varphi }{2}}\right)\right]\right){\text{ pixels}}
\end{aligned}
}
\\]

where λ is the [longitude](https://en.wikipedia.org/wiki/Longitude) in radians and φ is geodetic [latitude](https://en.wikipedia.org/wiki/Geodetic_latitude) in radians.

Because the Mercator projects the poles at infinity, Google Maps cannot show the poles. Instead it cuts off coverage at 85.051129° north and south. This is not considered a limitation, given the purpose of the service. The value 85.051129° is the latitude at which the full map becomes a square, and is computed as φ given y = 0:

\\[
{\displaystyle {\begin{aligned}\varphi _{\text{max}}=\left[2\arctan(e^{\pi })-{\frac {\pi }{2}}\right]\end{aligned}}} 
\\]


## Slippy Map

### File naming conventions

- Tiles are 256 × 256 pixel PNG files
- Each zoom level is a directory, each column is a subdirectory, and each tile in that column is a file
- Filename(url) format is /zoom/x/y.png

The slippy map expects tiles to be served up at URLs following this scheme, so all tile server URLs look pretty similar.

### X and Y

- X goes from 0 (left edge is 180 °W) to 2zoom − 1 (right edge is 180 °E)
- Y goes from 0 (top edge is 85.0511 °N) to 2zoom − 1 (bottom edge is 85.0511 °S) in a Mercator projection

For the curious, the number 85.0511 is the result of arctan(sinh(π)). By using this bound, the entire map becomes a (very large) square.

### Derivation of tile names

- Reproject the coordinates to the Mercator projection (from EPSG:4326 to EPSG:3857):

  - x = lon
  - y = arsinh(tan(lat)) = log[tan(lat) + sec(lat)]  
    (lat and lon are in radians)

- Transform range of x and y to 0 – 1 and shift origin to top left corner:

  - x = [1 + (x / π)] / 2
  - y = [1 − (y / π)] / 2

- Calculate the number of tiles across the map, n, using 2zoom
- Multiply x and y by n. Round results down to give tilex and tiley.

### Mathematics

Idem with mathematic signs (lat and lon in degrees):

\\[
\begin{align}
    x &= \left\lfloor \frac{lon + 180}{360} \cdot 2^z \right\rfloor ~\\\
    y &= \left\lfloor\left(1 - \frac{\ln \left(\tan \left( lat \cdot \frac{\pi}{180} \right) + \frac{1}{\cos \left( lat \cdot \frac{\pi}{180} \right)} \right) }{\pi} \right) \cdot 2^{z - 1} \right\rfloor
\end{align}
\\]

\\[
\begin{align}
    lon &= \frac{x}{2^z} \cdot 360 - 180 ~\\\
    lat &= \arctan \Bigg( \sinh \bigg( \pi - \frac{y}{2^z} \cdot 2\pi \bigg) \Bigg) \cdot \frac{180}{\pi} ~\\\
        &= \arctan \Bigg( \sinh \bigg( \pi \cdot \left( 1 - \frac{y}{2^z} \cdot 2 \right) \bigg) \Bigg) \cdot \frac{180}{\pi} ~\\\
\end{align}
\\]

### Scala

~~~
import scala.math._

case class Tile(x: Int,y: Int, z: Short){
  def toLatLon = new LatLonPoint(
    toDegrees(atan(sinh(Pi * (1.0 - 2.0 * y.toDouble / (1<<z))))), 
    x.toDouble / (1<<z) * 360.0 - 180.0,
    z)
  def toURI = new java.net.URI("http://tile.openstreetmap.org/"+z+"/"+x+"/"+y+".png")
}

case class LatLonPoint(lat: Double, lon: Double, z: Short){
  def toTile = new Tile(
    ((lon + 180.0) / 360.0 * (1<<z)).toInt,
    ((1 - log(tan(toRadians(lat)) + 1 / cos(toRadians(lat))) / Pi) / 2.0 * (1<<z)).toInt, 
    z)
}

//Usage:
val point = LatLonPoint(51.51202,0.02435,17)
val tile = point.toTile
// ==> Tile(65544,43582,17)
val uri = tile.toURI
// ==> http://tile.openstreetmap.org/17/65544/43582.png
~~~

## References

[^2]: ["Calculate distance, bearing and more between Latitude/Longitude points"](http://www.movable-type.co.uk/scripts/latlong.html). Retrieved 10 Aug 2013.

[^3]: Sinnott, Roger W. (August 1984). "Virtues of the Haversine". Sky and Telescope. **68** (2): 159.

[^4]: [Vincenty, Thaddeus](https://en.wikipedia.org/wiki/Thaddeus_Vincenty) (1975-04-01). ["Direct and Inverse Solutions of Geodesics on the Ellipsoid with Application of Nested Equations"](http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf) (PDF). Survey Review. Kingston Road, Tolworth, Surrey: [Directorate of Overseas Surveys](https://en.wikipedia.org/wiki/Directorate_of_Overseas_Surveys). 23 (176): 88–93. doi:[10.1179/sre.1975.23.176.88](https://dx.doi.org/10.1179%2Fsre.1975.23.176.88). Retrieved 2008-07-21.

[^6]: McCaw, G. T. (1932). "Long lines on the Earth". *Empire Survey Review*. **1** (6): 259–263. doi:[10.1179/sre.1932.1.6.259](https://dx.doi.org/10.1179%2Fsre.1932.1.6.259).
