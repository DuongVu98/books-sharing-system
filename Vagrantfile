
Vagrant.configure("2") do |config|
  
  config.vm.box = "ubuntu/xenial64"

  # Network setting
  # config.vm.network "forwarded_port", guest: 80, host: 8080
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"
  config.vm.network "private_network", ip: "192.168.33.10"
  # config.vm.network "public_network"

  # Proxy setting
  # if Vagrant.has_plugin?("vagrant-proxyconf")
  #   config.proxy.http     = "http://182.52.51.33:56059/"
  #   config.proxy.https    = "http://182.52.51.33:56059/"
  # end

  # Folder setting
  config.vm.synced_folder ".", "/home/vagrant/src"

  # Provider setting
  config.vm.provider "virtualbox" do |vb|
    vb.memory = 2048
    vb.cpus = 2
  end
 
  # Provision setting
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
end
