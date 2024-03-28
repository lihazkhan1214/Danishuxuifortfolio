const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const tailwindcssAnimate = require("tailwindcss-animate");

interface TailwindConfig {
  darkMode: "class";
  content: string[];
  prefix: string;
  theme: {
    container: {
      center: boolean;
      padding: string;
      screens: {
        "2xl": string;
      };
    };
    extend: {
      colors: {
        border: string;
        input: string;
        ring: string;
        background: string;
        foreground: string;
        primary: {
          DEFAULT: string;
          foreground: string;
        };
        secondary: {
          DEFAULT: string;
          foreground: string;
        };
        destructive: {
          DEFAULT: string;
          foreground: string;
        };
        muted: {
          DEFAULT: string;
          foreground: string;
        };
        accent: {
          DEFAULT: string;
          foreground: string;
        };
        popover: {
          DEFAULT: string;
          foreground: string;
        };
        card: {
          DEFAULT: string;
          foreground: string;
        };
      };
      borderRadius: {
        lg: string;
        md: string;
        sm: string;
      };
      keyframes: {
        "accordion-down": {
          from: { height: string };
          to: { height: string };
        };
        "accordion-up": {
          from: { height: string };
          to: { height: string };
        };
        scroll: {
          to: {
            transform: string;
          };
        };
      };
      animation: {
        "accordion-down": string;
        "accordion-up": string;
        scroll: string;
      };
    };
  };
  plugins: any[]; // Adjust this type according to the plugin type
}

const config: TailwindConfig = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate, addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: { addBase: Function; theme: Function }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = config;