<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf236079766ae0123ae86aaf43ce16a3e
{
    public static $files = array (
        'fcd5d7d87e03ff4f5b5a66c2b8968671' => __DIR__ . '/../..' . '/src/StoreApi/deprecated.php',
        'd0f16a186498c2ba04f1d0064fecf9cf' => __DIR__ . '/../..' . '/src/StoreApi/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
        'A' => 
        array (
            'Automattic\\WooCommerce\\StoreApi\\' => 32,
            'Automattic\\WooCommerce\\Blocks\\' => 30,
            'Automattic\\Jetpack\\Autoloader\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
        'Automattic\\WooCommerce\\StoreApi\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/StoreApi',
        ),
        'Automattic\\WooCommerce\\Blocks\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Automattic\\Jetpack\\Autoloader\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src',
        ),
    );

    public static $classMap = array (
        'Automattic\\Jetpack\\Autoloader\\AutoloadGenerator' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadGenerator.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf236079766ae0123ae86aaf43ce16a3e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf236079766ae0123ae86aaf43ce16a3e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf236079766ae0123ae86aaf43ce16a3e::$classMap;

        }, null, ClassLoader::class);
    }
}
