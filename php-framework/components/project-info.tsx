"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProjectInfo() {
  const [activeTab, setActiveTab] = useState("structure")
  const [framework, setFramework] = useState("laravel")

  // Laravel project structure
  const laravelStructure = `my-app/
├── app/
│   ├── Console/
│   ├── Exceptions/
│   ├── Http/
│   │   ├── Controllers/
│   │   ├── Middleware/
│   │   └── Requests/
│   ├── Models/
│   └── Providers/
├── bootstrap/
├── config/
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
├── public/
├── resources/
│   ├── css/
│   ├── js/
│   └── views/
├── routes/
│   ├── api.php
│   ├── channels.php
│   ├── console.php
│   └── web.php
├── storage/
├── tests/
├── .env
├── .env.example
├── .gitignore
├── artisan
├── composer.json
├── package.json
└── README.md`

  // Symfony project structure
  const symfonyStructure = `my-app/
├── bin/
│   └── console
├── config/
│   ├── bundles.php
│   ├── packages/
│   ├── routes.yaml
│   └── services.yaml
├── migrations/
├── public/
│   └── index.php
├── src/
│   ├── Controller/
│   ├── Entity/
│   ├── Repository/
│   ├── Service/
│   └── Kernel.php
├── templates/
├── tests/
├── translations/
├── var/
│   ├── cache/
│   └── log/
├── vendor/
├── .env
├── .env.local
├── .gitignore
├── composer.json
└── symfony.lock`

  // CodeIgniter project structure
  const codeigniterStructure = `my-app/
├── app/
│   ├── Config/
│   ├── Controllers/
│   ├── Database/
│   │   ├── Migrations/
│   │   └── Seeds/
│   ├── Filters/
│   ├── Helpers/
│   ├── Libraries/
│   ├── Models/
│   └── Views/
├── public/
│   ├── assets/
│   └── index.php
├── system/
├── tests/
├── writable/
│   ├── cache/
│   ├── logs/
│   └── session/
├── .env
├── .gitignore
├── composer.json
├── phpunit.xml.dist
└── spark`

  // Slim project structure
  const slimStructure = `my-app/
├── app/
│   ├── Controllers/
│   ├── Middleware/
│   ├── Models/
│   └── Views/
├── config/
│   ├── container.php
│   ├── middleware.php
│   └── routes.php
├── public/
│   └── index.php
├── src/
├── templates/
├── tests/
├── var/
│   ├── cache/
│   └── log/
├── vendor/
├── .env
├── .gitignore
├── composer.json
└── README.md`

  // Lumen project structure
  const lumenStructure = `my-app/
├── app/
│   ├── Console/
│   ├── Events/
│   ├── Exceptions/
│   ├── Http/
│   │   ├── Controllers/
│   │   └── Middleware/
│   ├── Jobs/
│   ├── Listeners/
│   ├── Models/
│   └── Providers/
├── bootstrap/
│   └── app.php
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
├── public/
│   └── index.php
├── resources/
│   └── views/
├── routes/
│   └── web.php
├── storage/
├── tests/
├── .env
├── .env.example
├── .gitignore
├── artisan
├── composer.json
└── README.md`

  const frameworkStructures = {
    laravel: laravelStructure,
    symfony: symfonyStructure,
    codeigniter: codeigniterStructure,
    slim: slimStructure,
    lumen: lumenStructure,
  }

  // Laravel composer.json
  const laravelComposerJson = `{
    "name": "laravel/laravel",
    "type": "project",
    "description": "My PHP application",
    "keywords": ["framework", "laravel"],
    "license": "MIT",
    "require": {
        "php": "^8.2",
        "laravel/framework": "^10.10",
        "laravel/sanctum": "^3.2",
        "laravel/tinker": "^2.8"
    },
    "require-dev": {
        "fakerphp/faker": "^1.9.1",
        "laravel/pint": "^1.0",
        "laravel/sail": "^1.18",
        "mockery/mockery": "^1.4.4",
        "nunomaduro/collision": "^7.0",
        "phpunit/phpunit": "^10.1",
        "spatie/laravel-ignition": "^2.0"
    },
    "autoload": {
        "psr-4": {
            "App\\\\": "app/",
            "Database\\\\Factories\\\\": "database/factories/",
            "Database\\\\Seeders\\\\": "database/seeders/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\\\": "tests/"
        }
    },
    "scripts": {
        "post-autoload-dump": [
            "Illuminate\\\\Foundation\\\\ComposerScripts::postAutoloadDump",
            "@php artisan package:discover --ansi"
        ],
        "post-update-cmd": [
            "@php artisan vendor:publish --tag=laravel-assets --ansi --force"
        ],
        "post-root-package-install": [
            "@php -r \\"file_exists('.env') || copy('.env.example', '.env');\\"
        ],
        "post-create-project-cmd": [
            "@php artisan key:generate --ansi"
        ]
    },
    "extra": {
        "laravel": {
            "dont-discover": []
        }
    },
    "config": {
        "optimize-autoloader": true,
        "preferred-install": "dist",
        "sort-packages": true,
        "allow-plugins": {
            "pestphp/pest-plugin": true,
            "php-http/discovery": true
        }
    },
    "minimum-stability": "stable",
    "prefer-stable": true
}`

  // Symfony composer.json
  const symfonyComposerJson = `{
    "name": "symfony/skeleton",
    "type": "project",
    "description": "My PHP application",
    "license": "MIT",
    "require": {
        "php": "^8.2",
        "ext-ctype": "*",
        "ext-iconv": "*",
        "symfony/console": "^6.3",
        "symfony/dotenv": "^6.3",
        "symfony/flex": "^2",
        "symfony/framework-bundle": "^6.3",
        "symfony/runtime": "^6.3",
        "symfony/yaml": "^6.3"
    },
    "require-dev": {
        "phpunit/phpunit": "^9.5",
        "symfony/browser-kit": "^6.3",
        "symfony/css-selector": "^6.3",
        "symfony/debug-bundle": "^6.3",
        "symfony/maker-bundle": "^1.0",
        "symfony/phpunit-bridge": "^6.3",
        "symfony/stopwatch": "^6.3",
        "symfony/web-profiler-bundle": "^6.3"
    },
    "config": {
        "allow-plugins": {
            "php-http/discovery": true,
            "symfony/flex": true,
            "symfony/runtime": true
        },
        "sort-packages": true
    },
    "autoload": {
        "psr-4": {
            "App\\\\": "src/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "App\\\\Tests\\\\": "tests/"
        }
    },
    "scripts": {
        "auto-scripts": {
            "cache:clear": "symfony-cmd",
            "assets:install %PUBLIC_DIR%": "symfony-cmd"
        },
        "post-install-cmd": [
            "@auto-scripts"
        ],
        "post-update-cmd": [
            "@auto-scripts"
        ]
    },
    "conflict": {
        "symfony/symfony": "*"
    },
    "extra": {
        "symfony": {
            "allow-contrib": false,
            "require": "6.3.*"
        }
    }
}`

  // CodeIgniter composer.json
  const codeigniterComposerJson = `{
    "name": "codeigniter4/appstarter",
    "type": "project",
    "description": "My PHP application",
    "homepage": "https://codeigniter.com",
    "license": "MIT",
    "require": {
        "php": "^8.0",
        "codeigniter4/framework": "^4.0"
    },
    "require-dev": {
        "fakerphp/faker": "^1.9",
        "mikey179/vfsstream": "^1.6",
        "phpunit/phpunit": "^9.1"
    },
    "autoload": {
        "exclude-from-classmap": [
            "**/Database/Migrations/**"
        ]
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\\\Support\\\\": "tests/_support"
        }
    },
    "scripts": {
        "test": "phpunit"
    },
    "support": {
        "forum": "https://forum.codeigniter.com/",
        "source": "https://github.com/codeigniter4/CodeIgniter4",
        "slack": "https://codeigniterchat.slack.com"
    }
}`

  const frameworkComposerJson = {
    laravel: laravelComposerJson,
    symfony: symfonyComposerJson,
    codeigniter: codeigniterComposerJson,
    slim: `{
    "name": "slim/slim-skeleton",
    "description": "My PHP application",
    "license": "MIT",
    "require": {
        "php": "^8.0",
        "slim/slim": "^4.10",
        "slim/psr7": "^1.5",
        "php-di/php-di": "^6.4",
        "monolog/monolog": "^2.8"
    },
    "require-dev": {
        "phpunit/phpunit": "^9.5"
    },
    "autoload": {
        "psr-4": {
            "App\\\\": "src/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\\\": "tests/"
        }
    },
    "scripts": {
        "start": "php -S localhost:8080 -t public"
    }
}`,
    lumen: `{
    "name": "laravel/lumen",
    "description": "My PHP application",
    "keywords": ["framework", "laravel", "lumen"],
    "license": "MIT",
    "type": "project",
    "require": {
        "php": "^8.0",
        "laravel/lumen-framework": "^9.0"
    },
    "require-dev": {
        "fakerphp/faker": "^1.9.1",
        "mockery/mockery": "^1.4.4",
        "phpunit/phpunit": "^9.5.10"
    },
    "autoload": {
        "psr-4": {
            "App\\\\": "app/",
            "Database\\\\Factories\\\\": "database/factories/",
            "Database\\\\Seeders\\\\": "database/seeders/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\\\": "tests/"
        }
    },
    "scripts": {
        "post-root-package-install": [
            "@php -r \\"file_exists('.env') || copy('.env.example', '.env');\\"
        ]
    },
    "config": {
        "optimize-autoloader": true,
        "preferred-install": "dist",
        "sort-packages": true
    },
    "minimum-stability": "dev",
    "prefer-stable": true
}`,
  }

  // Laravel main file
  const laravelMainFile = `<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \\Illuminate\\Contracts\\Support\\Renderable
     */
    public function index()
    {
        return view('home');
    }
}
`

  // Symfony main file
  const symfonyMainFile = `<?php

namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Annotation\\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
`

  // CodeIgniter main file
  const codeigniterMainFile = `<?php

namespace App\\Controllers;

class Home extends BaseController
{
    public function index()
    {
        return view('welcome_message');
    }
}
`

  const frameworkMainFile = {
    laravel: laravelMainFile,
    symfony: symfonyMainFile,
    codeigniter: codeigniterMainFile,
    slim: `<?php

namespace App\\Controller;

use Psr\\Http\\Message\\ResponseInterface as Response;
use Psr\\Http\\Message\\ServerRequestInterface as Request;

class HomeController
{
    public function index(Request $request, Response $response): Response
    {
        $response->getBody()->write('Hello, World!');
        return $response;
    }
}
`,
    lumen: `<?php

namespace App\\Http\\Controllers;

use Laravel\\Lumen\\Routing\\Controller as BaseController;

class HomeController extends BaseController
{
    public function index()
    {
        return view('home');
    }
}
`,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Preview</CardTitle>
        <CardDescription>Preview your project structure and files</CardDescription>
        <div className="mt-2">
          <Select value={framework} onValueChange={setFramework}>
            <SelectTrigger id="preview-framework">
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="laravel">Laravel</SelectItem>
              <SelectItem value="symfony">Symfony</SelectItem>
              <SelectItem value="codeigniter">CodeIgniter</SelectItem>
              <SelectItem value="slim">Slim</SelectItem>
              <SelectItem value="lumen">Lumen</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="structure" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>
          <TabsContent value="structure" className="pt-4">
            <div className="rounded-md border p-4 font-mono text-xs md:text-sm overflow-auto max-h-[300px]">
              <pre className="whitespace-pre-wrap">
                {frameworkStructures[framework as keyof typeof frameworkStructures]}
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="files" className="pt-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">composer.json</h3>
                <div className="rounded-md border p-4 font-mono text-xs md:text-sm overflow-auto max-h-[200px] md:max-h-[300px]">
                  <pre className="whitespace-pre">
                    {frameworkComposerJson[framework as keyof typeof frameworkComposerJson]}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">
                  {framework === "laravel" && "app/Http/Controllers/HomeController.php"}
                  {framework === "symfony" && "src/Controller/HomeController.php"}
                  {framework === "codeigniter" && "app/Controllers/Home.php"}
                  {framework === "slim" && "src/Controller/HomeController.php"}
                  {framework === "lumen" && "app/Http/Controllers/HomeController.php"}
                </h3>
                <div className="rounded-md border p-4 font-mono text-xs md:text-sm overflow-auto max-h-[200px] md:max-h-[300px]">
                  <pre className="whitespace-pre">{frameworkMainFile[framework as keyof typeof frameworkMainFile]}</pre>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
        <Button variant="outline" className="w-full sm:w-auto">
          <Eye className="mr-2 h-4 w-4" />
          {activeTab === "structure" ? "View Files" : "View Structure"}
        </Button>
        <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardFooter>
    </Card>
  )
}
