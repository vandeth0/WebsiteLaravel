<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }

    public function travleDir(string $root, callable $callback)
    {
        $dh = opendir($root);
        while ($file = readdir($dh)) {
            if ('.' == $file || '..' == $file) {
                continue;
            }
            $path = "$root/$file";
            if (is_dir($path)) {
                $this->travleDir($path, $callback);
                continue;
            }
            call_user_func($callback, $path);
        }
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        $root = base_path('routes/Web');
        $this->travleDir($root, function ($path) {
            Route::middleware('web')
                ->namespace($this->namespace)
                ->group($path);
        });
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        $root = base_path('routes/Api');
        $this->travleDir($root, function ($path) {
            Route::prefix('/api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group($path);
        });
    }
}
