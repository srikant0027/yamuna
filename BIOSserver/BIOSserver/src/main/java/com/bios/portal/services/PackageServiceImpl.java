package com.bios.portal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bios.portal.repositories.PackageRepository;
import com.bios.portal.entities.Package;
/**
 * Author @ Tushar Upadhyay
 */

@Service("packageService")
public class PackageServiceImpl implements PackageService{

	@Autowired
	PackageRepository pacrepo;
	
	@Transactional
	@Override
	public List<Package> getPackages() throws Exception {
		return  pacrepo.findAll();
	}
}
